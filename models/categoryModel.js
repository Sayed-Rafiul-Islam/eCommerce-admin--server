const mongoose = require("mongoose")

const Schema = mongoose.Schema

const CategoryModel = new Schema({
    storeId : {
        type : String,
        required : true
    },
    billboardId : {
        type : String,
        required : true
    },
    name : {
        type : String,
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

const Category = mongoose.model("Category", CategoryModel)

module.exports = Category