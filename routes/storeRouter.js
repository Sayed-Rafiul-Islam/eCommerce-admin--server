const express = require('express');
const router = express.Router()

const { createStore, getFirstStores, getStoresById } = require('../controllers/storeController');


router.post('/createStore', createStore)
router.get('/getFirstStore', getFirstStores)
router.get('/getStoresbyId', getStoresById)

module.exports = router