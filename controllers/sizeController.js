const { ObjectId } = require('mongodb')
const Size = require('../models/sizeModel')


// get sizes

const getSizes = async (req,res) => {
    try {
        const {storeId} = req.params
        const sizes = await Size.find({storeId}).sort({ updatedAt : -1})
        res.status(200).json(sizes)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get size by ID

const getSizeById = async (req,res) => {
    try {
        const {sizeId} = req.params
        
        if (!ObjectId.isValid(sizeId)) {
            res.status(200).json(null)
        } else {
            const size = await Size.findOne({
                _id : sizeId
            })
            res.status(200).json(size)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// create size

const createSize = async (req,res) => {
    try {
        const size = req.body
        const newsize = await Size.create(size)
        res.status(200).json(newsize)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// update size 

const updateSize = async (req,res) => {
    try {
        const update = req.body
        const filter = {_id : update.sizeId}
        const updatedsize = await Size.updateMany(filter,update,{new : true})
        res.status(200).json(updatedsize)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete size 

const deleteSize = async (req,res) => {
    try {
        const {sizeId} = req.params
        const filter = {_id : sizeId}
        const deletedsize = await Size.deleteOne(filter)
        res.status(200).json(deletedsize)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getSizes,
    getSizeById,
    createSize,
    updateSize,
    deleteSize
}