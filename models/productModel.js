const mongoose = require("mongoose")

const Schema = mongoose.Schema

const productSchema = new Schema({
    product_id : {
        type : String,
        required : true
    },
    product_name : {
        type : String,
        required : true
    },
    configuration : {
        type : String,
        required : true
    },
    source_name : {
        type : String,
        required : true
    },
    unit_price : {
        type : String,
        required : true
    },
    import_date : {
        type : String,
        required : true
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product