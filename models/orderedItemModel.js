const mongoose = require("mongoose")
const Product = require("./productModel")

const Schema = mongoose.Schema


const OrderedItemModel = new Schema({
    orderId : {
        type : String,
        required : true
    },
    product : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Product,
        required : true
    }
})

const OrderedItem = mongoose.model("OrderedItem", OrderedItemModel)

module.exports = OrderedItem