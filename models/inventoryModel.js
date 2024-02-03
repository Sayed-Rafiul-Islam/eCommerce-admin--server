const mongoose = require("mongoose")

const Schema = mongoose.Schema

const inventorySchema = new Schema({
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
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true    
    },
    import_date : {
        type : String,
        required : true    
    }
})

const Inventory = mongoose.model("Inventory", inventorySchema)

module.exports = Inventory