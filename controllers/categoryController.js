const { ObjectId } = require('mongodb')
const Category = require('../models/categoryModel')

// create Category

const createCategory = async (req,res) => {
    try {
        const category = req.body
        const newCategory = await Category.create(category)
        res.status(200).json(newCategory)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// get Categories


const getCategories = async (req,res) => {
    try {
        const {storeId} = req.params
        const categories = await Category.find({storeId}).sort({ updatedAt : -1}).populate("billboardId")
        res.status(200).json(categories)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get category by ID

const getCategoryById = async (req,res) => {
    try {
        const {categoryId} = req.params
        
        if (!ObjectId.isValid(categoryId)) {
            res.status(200).json(null)
        } else {
            const category = await Category.findOne({
                _id : categoryId
            })
            res.status(200).json(category)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// update category 

const updateCategory = async (req,res) => {
    try {
        const update = req.body
        const filter = {_id : update.categoryId}
        const updatedCategory = await Category.updateMany(filter,update,{new : true})
        res.status(200).json(updatedCategory)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete category 

const deleteCategory = async (req,res) => {
    try {
        const {categoryId} = req.params
        const filter = {_id : categoryId}
        const deletedCategory = await Category.deleteOne(filter)
        res.status(200).json(deletedCategory)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory,
    getCategories
}