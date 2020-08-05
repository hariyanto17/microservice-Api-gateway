const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const coursesHandler = require('./handler/courses');

/* GET users listing. */
router.post('/', coursesHandler.create);
router.get('/', coursesHandler.getAll);
// router.get('/:id', coursesHandler.get);
router.put('/:id', coursesHandler.update);
router.delete('/:id', coursesHandler.destroy);


module.exports = router;
 