const { getProductIds, 
    getProductPageCount, 
    addProduct,
    getOneProduct,
    deleteProduct
} = require('../controllers/productController')
const express = require('express');

const router = express.Router()

router.get('/productIds', getProductIds)
router.get('/productIdPageCount', getProductPageCount)
router.post('/addProduct', addProduct)
router.get('/products', getOneProduct)
router.delete('/product', deleteProduct)

module.exports = router
