const express = require('express');
const { handleAuthorization, checkout } = require('../controllers/checkoutController');
const router = express.Router()



router.options('/:storeId/checkout', handleAuthorization)
router.post('/:storeId/checkout', checkout)
// router.get('/:storeId/colors/:colorId', getColorById)
// router.patch('/:storeId/colors/:colorId', updateColor)
// router.delete('/:storeId/colors/:colorId', deleteColor)

module.exports = router