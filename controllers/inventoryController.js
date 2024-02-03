const Inventory = require('../models/inventoryModel')

// get all inventory items

const getInventory = async (req,res) => {  
    try {
        const page = req.query.page
        const inventory = await Inventory.find({})
        res.status(200).send(inventory.reverse().slice(10*page,10*(page+1)))
    } catch (error) {
        res.status(500).send(error)
    }
}

// get the inventory items page count

const getInventoryPageCount = async (req,res) => {
    try {
        const inventory = await Inventory.find({})
        const pageCount = Math.ceil(inventory.length / 10)
        res.status(200).json(pageCount)
    } catch (error) {
        res.status(500).send(error)
    }
}
// get one item from inventory 

const getOneItem = async (req,res) => {
    try {
        const id = req.query.id
        const item = await Inventory.findOne({_id : id})
        res.status(200).send(item)
    } catch (error) {
        res.status(500).send(error)
    }
    
}
// delete one item from inventory 

const deleteItem = async (req,res) => {
    try {
        const id = req.query.id
        await Inventory.deleteOne({_id : id})
        res.status(200).json()
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getInventory,
    getInventoryPageCount,
    getOneItem,
    deleteItem
}