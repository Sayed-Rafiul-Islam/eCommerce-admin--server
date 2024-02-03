const mongoose = require("mongoose")

const Schema = mongoose.Schema

const StoreModel = new Schema({
    name : {
        type : String,
        required : true
    },
    userId : {
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

const Store = mongoose.model("Store", StoreModel)

module.exports = Store