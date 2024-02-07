const express = require('express');
const router = express.Router()

const { 
    getSizes, 
    getSizeById, 
    createSize, 
    updateSize, 
    deleteSize 
} = require('../controllers/sizeController');


router.get('/:storeId/sizes', getSizes)
router.get('/:storeId/sizes/:sizeId', getSizeById)
router.post('/:storeId/sizes', createSize)
router.patch('/:storeId/sizes/:sizeId', updateSize)
router.delete('/:storeId/sizes/:sizeId', deleteSize)

module.exports = router