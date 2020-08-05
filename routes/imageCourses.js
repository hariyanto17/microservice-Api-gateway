const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const imageCoursesHandler = require('./handler/image-courses');

// const verifyToken = require('../middlewares/verifyToken');

/* GET users listing. */


router.post('/',  imageCoursesHandler.create);
router.delete('/:id', imageCoursesHandler.destroy);


module.exports = router;
 