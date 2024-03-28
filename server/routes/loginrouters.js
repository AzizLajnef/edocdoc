const router = require('express').Router();
const verifyToken=require('../controllers/middelware')
const {getAll,addOne,register,login,loginProfile,logoutProfile ,updateOne,}=require('../controllers/login')
router.get("/",getAll);
router.post("/register",register);
router.post("/login",login);
router.post("/login/profile",verifyToken,loginProfile);
router.post("/logout",verifyToken,logoutProfile);
router.patch("/:id",verifyToken,updateOne);
router.post("/",addOne);
module.exports = router;