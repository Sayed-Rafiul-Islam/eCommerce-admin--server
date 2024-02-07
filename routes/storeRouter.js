const express = require('express');
const router = express.Router()

const { 
    createStore, 
    getFirstStores, 
    getStoresById, 
    getStores, 
    updateStore, 
    deleteStore 
} = require('../controllers/storeController');


router.post('/createStore', createStore)
router.get('/getFirstStore', getFirstStores)
router.get('/getStoresbyId', getStoresById)
router.get('/getStores', getStores)
router.patch('/updateStore', updateStore)
router.delete('/deleteStore', deleteStore)

module.exports = router