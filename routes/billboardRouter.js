
const express = require('express');
const router = express.Router()

const { getBillboardbyId, createBillboard, updateBillboard, deleteBillboard, getBillboards } = require('../controllers/billboardController');


router.get('/:storeId/billboards/:billboardId', getBillboardbyId)
router.get('/:storeId/billboards', getBillboards)
router.post('/:storeId/billboards', createBillboard)
router.patch('/:storeId/billboards/:billboardId', updateBillboard)
router.delete('/:storeId/billboards/:billboardId', deleteBillboard)



module.exports = router