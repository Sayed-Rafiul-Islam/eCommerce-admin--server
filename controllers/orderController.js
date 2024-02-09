const Order = require('../models/orderModel')


// get order

const getOrders = async (req,res) => {
    try {
        const {storeId} = req.params
        const orders = await Order.find({storeId}).sort({ createdAt : -1}).populate("orderedItems.orderedItem")
        console.log(orders[0].orderedItems)
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).send(error)
    }
}

// export

module.exports = {
    getOrders
}