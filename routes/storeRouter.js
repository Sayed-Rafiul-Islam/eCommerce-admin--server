const express = require('express');
const router = express.Router()

const { createStore, getFirstStores, getStoresById, getStores } = require('../controllers/storeController');


router.post('/createStore', createStore)
router.get('/getFirstStore', getFirstStores)
router.get('/getStoresbyId', getStoresById)
router.get('/getStores', getStores)

module.exports = router