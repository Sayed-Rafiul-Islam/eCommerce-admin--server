const mongoose = require("mongoose")

const Schema = mongoose.Schema

const monthlyRecordSchema = new Schema({
    bought : {
        type : Number,
        required : true
    },
    sold : {
        type : Number,
        required : true
    },
    employee : {
        type : Number,
        required : true
    },
    additionals : {
        type : Number,
        required : true
    },
    due : {
        type : Number,
        required : true
    },
    profit : {
        type : Number,
        required : true
    },
    record_date : {
        type : String,
        required : true
    }
})

const MonthlyRecord = mongoose.model("MonthlyRecord", monthlyRecordSchema)

module.exports = MonthlyRecord