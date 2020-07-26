const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env


const usersHandler = require('./handler/users');

/* GET users listing. */
router.post('/register', usersHandler.register);



module.exports = router;
 