const mongoose = require("mongoose")

const Schema = mongoose.Schema

const SizeModel = new Schema({
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

const Size = mongoose.model("Size", SizeModel)

module.exports = Size