const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const reviewsHandler = require('./handler/reviews');

/* GET users listing. */
router.put('/:id', reviewsHandler.update);
router.post('/', reviewsHandler.create);
router.delete('/:id', reviewsHandler.destroy);



module.exports = router;
 