const mongoose = require("mongoose")
const Category = require('./categoryModel')
const Size = require('./sizeModel')
const Color = require('./colorModel')

const Schema = mongoose.Schema

const ProductModel = new Schema({
    storeId : {
        type : String,
        required : true
    },
    categoryId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Category,
        required : true
    },
    sizeId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Size,
        required : true
    },
    colorId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Color,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    isFeatured : {
        type : Boolean,
        required : true,
        default : false
    },
    isArchieved : {
        type : Boolean,
        required : true,
        default : false
    },
    quantity : {
        type : Number,
        required : true,
    },
    images : {
        type : [ { url : String } ],
        required : true
    },
    createdAt : {
        type : Date,
        required : true
    },
    updatedAt : {
        type : Date,
        required : true,
    }
})

const Product = mongoose.model("Product", ProductModel)

module.exports = Product