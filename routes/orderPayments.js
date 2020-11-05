const express = require('express');
const router = express.Router();

const orderPaymnetsHandler = require('./handler/order-payment');

router.get('/', orderPaymnetsHandler.getOrders);

module.exports = router;
 