const { ObjectId } = require('mongodb')
const Color = require('../models/colorModel')


// get colors

const getColors = async (req,res) => {
    try {
        const {storeId} = req.params
        const colors = await Color.find({storeId}).sort({ updatedAt : -1})
        res.status(200).json(colors)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get color by ID

const getColorById = async (req,res) => {
    try {
        const {colorId} = req.params
        
        if (!ObjectId.isValid(colorId)) {
            res.status(200).json(null)
        } else {
            const color = await Color.findOne({
                _id : colorId
            })
            res.status(200).json(color)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// create color

const createColor = async (req,res) => {
    try {
        const color = req.body
        const newcolor = await Color.create(color)
        res.status(200).json(newcolor)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// update color 

const updateColor = async (req,res) => {
    try {
        const update = req.body
        const filter = {_id : update.colorId}
        const updatedcolor = await Color.updateMany(filter,update,{new : true})
        res.status(200).json(updatedcolor)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete color 

const deleteColor = async (req,res) => {
    try {
        const {colorId} = req.params
        const filter = {_id : colorId}
        const deletedcolor = await Color.deleteOne(filter)
        res.status(200).json(deletedcolor)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getColors,
    getColorById,
    createColor,
    updateColor,
    deleteColor
}