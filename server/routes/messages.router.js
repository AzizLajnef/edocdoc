const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages'); 


router.get('/', messagesController.getMessages);
router.post('/', messagesController.postMessage);
router.delete('/:id', messagesController.deleteMessage);

module.exports = router;
