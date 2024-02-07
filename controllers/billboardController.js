const { ObjectId } = require('mongodb')
const Billboard = require('../models/billboardModal')

// create billboard

const createBillboard = async (req,res) => {
    try {
        const billboard = req.body
        const newBillboard = await Billboard.create(billboard)
        res.status(200).json(newBillboard)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// get billboards


const getBillboards = async (req,res) => {
    try {
        const {storeId} = req.params
        const billboards = await Billboard.find({storeId})
        res.status(200).json(billboards.reverse())
    } catch (error) {
        res.status(500).send(error)
    }
}

// get billboard by ID

const getBillboardbyId = async (req,res) => {
    try {
        const {billboardId} = req.params
        if (!ObjectId.isValid(billboardId)) {
            res.status(200).json(null)
        } else {
            const billboard = await Billboard.findOne({
                _id : billboardId
            })
            res.status(200).json(billboard)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// update billboard 

const updateBillboard = async (req,res) => {
    try {
        const update = req.body
        const filter = {_id : update.billboardId}
        const updatedBillboard = await Billboard.updateMany(filter,update,{new : true})
        res.status(200).json(updatedBillboard)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete billboard 

const deleteBillboard = async (req,res) => {
    try {
        const {billboardId} = req.params
        const filter = {_id : billboardId}
        const deletedBillboard = await Billboard.deleteOne(filter)
        res.status(200).json(deletedBillboard)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getBillboardbyId,
    createBillboard,
    updateBillboard,
    deleteBillboard,
    getBillboards
}