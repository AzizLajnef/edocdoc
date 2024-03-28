const db = require('../model-mysql/index')
const axios = require('axios')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports = { 
 register:async function(req,res){
    try {
        const { firstName,lastName,email,password } = req.body;
        const userExists = await db.User.findOne({
            where: {
                email:email
            }
        });
        if (userExists) {
            return res.status(400).send('Email is already associated with an account');
        }
        const hashedPassword = await bcrypt.hash(password, 15);
        const user = await db.User.create({ firstName,lastName,email,password:hashedPassword});    
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', {expiresIn: '1h',});
        const User = await db.User.update({autoTokens:token},{
            where: {
               id:user.id
            }
        })    
        res.status(201).send(user);
        } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
        }


 },
 login:async function (req,res){
    try {
        const { firstName,lastName,email,password  } = req.body;
        const user = await db.User.findOne({
            where: {
                email:email
            }
        })
        if (!user) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
        return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = jwt.sign({ userId: user.id }, 'your-secret-key', {expiresIn: '1h',});
        const User = await db.User.update({autoTokens:token},{
            where: {
               id:user.id
            }
        })

        res.status(200).json({user:user,token:token });
        } catch (error) {
        res.status(500).json({ error: 'Login failed' });
        }

 }, 
 loginProfile:async function (req,res){
    res.send(req.user)
 }, 
 logoutProfile:async function (req,res){
   try {
    
    req.user.autoTokens=""
    await req.user.save()

     res.send("lOG OUT") 
   } catch (error) {
    res.status(500).send(error)
    
   } 

 },
 addOne:async function(req,res){
    try {
        const user= await db.User.create(req.body)
        res.status(200).send(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }


 },
 selectOne:async function(req,res){
 },
 deleteOne:async function(req,res){    
    try {
        let _id=req.params.id
        const profile=db.Profile.destroy({where:{id:_id}})
        res.json(profile)
    } catch (err) {
        throw err
    }
 },
 UpdateOne :async function(req,res){
    try {
        let _id=req.params.id
        const profile= await db.Profile.update(req.body,{where:{id:_id}})
        res.status(201).send(profile)
        } catch (error) {
        throw error
    }
 },
 getAll :async function(req,res){
    try {
        const user= await db.User.findAll({})
        res.status(200).send(user)

    } catch (error) {
        throw error

    }
 },
 updateOne:async function(req,res){
    try {
        const user= await db.User.update({
            firstName:req.body.firstName,
            email:req.body.email,
            password:req.body.password,
            phoneNumber:req.body.phoneNumber
            
        },{
            where:{
                id:req.params.id
            }
        })
        res.status(200).send(user)

        
    } catch (error) {
        throw error
        
    }
 }
}