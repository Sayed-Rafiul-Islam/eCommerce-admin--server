const mongoose = require("mongoose")
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
                },
                quantity : {
                    type : Number,
                    required : true,
                    default : 1
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
        default : 'none'
    },
    address : {
        type : String,
        required : true,
        default : 'none'
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