const express = require('express');
const router = express.Router()

const { 
    getCategories, 
    getCategoryById, 
    createCategory, 
    updateCategory, 
    deleteCategory 
} = require('../controllers/categoryController');


router.get('/:storeId/categories', getCategories)
router.get('/:storeId/categories/:categoryId', getCategoryById)
router.post('/:storeId/categories', createCategory)
router.patch('/:storeId/categories/:categoryId', updateCategory)
router.delete('/:storeId/categories/:categoryId', deleteCategory)

module.exports = router