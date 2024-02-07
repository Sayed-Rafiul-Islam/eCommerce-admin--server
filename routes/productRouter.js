const express = require('express');
const router = express.Router()

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');


router.get('/:storeId/products', getProducts)
router.get('/:storeId/products/:productId', getProductById)
router.post('/:storeId/products', createProduct)
router.patch('/:storeId/products/:productId', updateProduct)
router.delete('/:storeId/products/:productId', deleteProduct)

module.exports = router