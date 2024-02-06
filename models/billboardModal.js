const mongoose = require("mongoose")

const Schema = mongoose.Schema

const BillBoardModal = new Schema({
    storeId : {
        type : String,
        required : true
    },
    label : {
        type : String,
        required : true
    },
    imageUrl : {
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

const BillBoard = mongoose.model("Billboard", BillBoardModal)

module.exports = BillBoard