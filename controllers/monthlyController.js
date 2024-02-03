const Monthly = require('../models/monthlyModel')


// get monthly records by date

const getMonthlyRecords = async (req,res) => {
    try {
        const {record_date} = req.query
        const records = await Monthly.find({record_date})
        res.status(200).json(records.reverse())
    } catch (error) {
        res.status(500).send(error)
    }
}

// add to monthly records


const addMonthly = async (req,res) => {
    try {
        const {
            sold,
            bought,
            due,
            employee,
            additionals,
            profit,
            record_date
        } = req.body;

        const newRecord = {
            sold,
            bought,
            due,
            employee,
            additionals,
            profit,
            record_date
        }

        await Monthly.create(newRecord)
        res.status(200).send({message : `Record Added`})

        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
}

// delete one record from Monthly Records 

const deleteMonthly = async (req,res) => {
    try {
        const {id} = req.query
        await Monthly.deleteOne({_id : id})
        res.status(200).json({message : "monthly record deleted"})
    } catch (error) {
        res.status(500).send(error)
    }
}




// export

module.exports = {
    addMonthly,
    getMonthlyRecords,
    deleteMonthly

}