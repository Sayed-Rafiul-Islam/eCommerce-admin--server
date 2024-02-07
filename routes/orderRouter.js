const express = require('express');
const router = express.Router()

const { getOrders } = require('../controllers/orderController');


router.get('/:storeId/orders', getOrders)
// router.get('/:storeId/orders/:categoryId', getCategoryById)
// router.post('/:storeId/orders', createCategory)
// router.patch('/:storeId/orders/:categoryId', updateCategory)
// router.delete('/:storeId/orders/:categoryId', deleteCategory)

module.exports = router