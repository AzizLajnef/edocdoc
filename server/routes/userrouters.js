const router = require('express').Router();
const usercontroller = require("../controllers/usercontroller")

router.get('/all', usercontroller.getAllUsers)
router.get('/update', usercontroller.updateUser)

module.exports = router;
