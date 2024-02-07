const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ImageModel = new Schema({
    productId : {
        type : String,
        required : true
    },
    url : {
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

const Image = mongoose.model("Image", ImageModel)

module.exports = Image