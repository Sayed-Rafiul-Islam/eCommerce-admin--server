const { ObjectId } = require('mongodb')
const Product = require('../models/productModel')


// get products

const getProducts = async (req,res) => {
    try {
        const {storeId} = req.params
        const products = await Product.find({storeId}).sort({ updatedAt : -1}).populate(["categoryId","sizeId","colorId" ])
        res.status(200).json(products)
    } catch (error) {
        res.status(500).send(error)
    }
}

// get product by ID

const getProductById = async (req,res) => {
    try {
        const {productId} = req.params
        
        if (!ObjectId.isValid(productId)) {
            res.status(200).json(null)
        } else {
            const product = await Product.findOne({
                _id : productId
            })
            res.status(200).json(product)
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// create size

const createProduct = async (req,res) => {
    try {
        const product = req.body
        console.log(product)
        const newProduct = await Product.create(product)
        res.status(200).json(newProduct)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}

// update size 

const updateProduct = async (req,res) => {
    try {
        const update = req.body
        const filter = {_id : update.productId}
        const updatedProduct = await Product.updateMany(filter,update,{new : true})
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

// delete size 

const deleteProduct = async (req,res) => {
    try {
        const {productId} = req.params
        const filter = {_id : productId}
        const deletedProduct = await Product.deleteOne(filter)
        res.status(200).json(deletedProduct)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}