const Store = require('../models/storeModel')

// create Store

const createStore = async (req,res) => {
    try {
        const { userId, name } = req.body
        const data = {
            userId,
            name,
            createdAt : new Date(),
            updatedAt : new Date(),
        }
        const newStore = await Store.create(data)
        res.status(200).json(newStore)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// get first stores 

const getFirstStores = async (req,res) => {
    try {
        const { userId } = req.query
        const stores = await Store.find({userId}).sort({ updatedAt : -1})
        res.status(200).json(stores)
    } catch (error) {
        res.status(500).send(error)
    }
}

const getStores = async (req,res) => {
    try {
        const { userId } = req.query
        const stores = await Store.find({userId}).sort({ updatedAt : -1})
        res.status(200).json(stores)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get stores 

const getStoresById = async (req,res) => {
    try {
        const {storeId, userId} = req.query
        const stores = await Store.find({
            _id : storeId,
            userId
        })
        res.status(200).json(stores)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get stores 

const updateStore = async (req,res) => {
    try {
        const {storeId, userId, name} = req.body
        const filter = {_id : storeId ,userId}
        const update = {name, updatedAt : new Date}
        const store = await Store.updateMany(filter,update,{new : true})
        res.status(200).json(store)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get stores 

const deleteStore = async (req,res) => {
    try {
        const {storeId,userId} = req.query
        const filter = {_id : storeId ,userId}
        const store = await Store.deleteOne(filter)
        res.status(200).json(store)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    createStore,
    getFirstStores,
    getStoresById,
    getStores,
    updateStore,
    deleteStore
}