const express = require('express');
const { handleAuthorization, checkout } = require('../controllers/checkoutController');
const router = express.Router()



router.options('/:storeId/checkout', handleAuthorization)
router.post('/:storeId/checkout', checkout)

module.exports = router