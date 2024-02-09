const mongoose = require("mongoose")
const OrderedItem = require('./orderedItemModel')
const Product = require("./productModel")

const Schema = mongoose.Schema


const OrderModel = new Schema({
    storeId : {
        type : String,
        required : true
    },
    orderedItems : {
        type : [
            {
                orderedItem : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : Product,
                    required : true
                }
            }
        ],
        required : true
    },
    isPaid : {
        type : Boolean,
        required : true,
        default : false
    },
    phone : {
        type : String,
        required : true,
        default : ''
    },
    address : {
        type : String,
        required : true,
        default : ''
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