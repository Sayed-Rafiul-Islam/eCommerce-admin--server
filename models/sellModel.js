const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SellRecordSchema = new Schema({
    customer_name : {
        type : String,
        required : true
    },
    contact_no : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    product_id : {
        type : String,
        required : true,
        unique: true
    },
    product_name : {
        type : String,
        required : true
    },
    configuration : {
        type : String,
        required : true
    },
    buying_price : {
        type : Number,
        required : true
    },
    selling_price : {
        type : Number,
        required : true
    },
    due : {
        type : Number,
        required : true
    },
    selling_date : {
        type : Date,
        required : true
    }
})

const SellRecord = mongoose.model("SellRecord", SellRecordSchema)

module.exports = SellRecord