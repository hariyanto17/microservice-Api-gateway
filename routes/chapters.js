const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const captersHandler = require('./handler/chapters');

/* GET users listing. */
router.get('/', captersHandler.getAll);
router.get('/:id', captersHandler.get);

router.put('/:id', captersHandler.update);
router.post('/', captersHandler.create);
router.delete('/:id', captersHandler.destroy);


module.exports = router;
 