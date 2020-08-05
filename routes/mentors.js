const express = require('express');
const router = express.Router();
const {APP_NAME} = process.env

const mentorsHandler = require('./handler/mentors');

/* GET users listing. */
router.get('/', mentorsHandler.getAll);
router.get('/:id', mentorsHandler.get);
router.put('/:id', mentorsHandler.update);
router.post('/', mentorsHandler.create);
router.delete('/:id', mentorsHandler.destroy);



module.exports = router;
 