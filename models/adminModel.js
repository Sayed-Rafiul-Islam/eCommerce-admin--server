const mongoose = require("mongoose")

const Schema = mongoose.Schema

const adminSchema = new Schema({
    admin_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    pass_word : {
        type : String,
        required : true
    }
})

const Admin = mongoose.model("Admin", adminSchema)

module.exports = Admin

