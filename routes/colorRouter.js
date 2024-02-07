const express = require('express');
const { getColors, getColorById, createColor, updateColor, deleteColor } = require('../controllers/colorController');
const router = express.Router()



router.get('/:storeId/colors', getColors)
router.get('/:storeId/colors/:colorId', getColorById)
router.post('/:storeId/colors', createColor)
router.patch('/:storeId/colors/:colorId', updateColor)
router.delete('/:storeId/colors/:colorId', deleteColor)

module.exports = router