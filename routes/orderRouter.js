const express = require('express');
const router = express.Router()

const { getOrders } = require('../controllers/orderController');


router.get('/:storeId/orders', getOrders)

module.exports = router