const mongoose = require("mongoose")

const Schema = mongoose.Schema

const OrderModel = new Schema({
    storeId : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    value : {
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

const Order = mongoose.model("Order", OrderModel)

module.exports = Order