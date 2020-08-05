const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const lessonsHandler = require('./handler/lessons');

/* GET users listing. */
router.get('/', lessonsHandler.getAll);
router.get('/:id', lessonsHandler.get);

router.put('/:id', lessonsHandler.update);
router.post('/', lessonsHandler.create);
router.delete('/:id', lessonsHandler.destroy);


module.exports = router;
 