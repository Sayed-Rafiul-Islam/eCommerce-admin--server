const stripe = require("../libs/stripe")
const Order = require("../models/orderModel")
const Product = require("../models/productModel")
const { ObjectId } = require("mongodb")
require('dotenv').config()


const webhook = async (req,res) => {

    const payload = req.body
    const signature = req.headers["stripe-signature"]
    const secret = process.env.STRIPE_WEBHOOK_SECRET
    let event

    try {
        event = stripe.webhooks.constructEvent(payload,signature,secret)
    } catch (error) {
        console.log(error.message)
        res.status(400).json({success : false})
        return
    }
    
    const session = event.data.object
    const address = session?.customer_details?.address

        const addressComponents = [
            address?.line1,
            address?.line2,
            address?.city,
            address?.state,
            address?.postal_code,
            address?.country
        ]

        const addressString = addressComponents.filter((c) => c !== null).join(", ")

        if (event.type === "checkout.session.completed") {

            const filter = { _id : session?.metadata?.orderId }
            const orderUpdate = {
                isPaid : true,
                address : addressString,
                phone : session?.customer_details?.phone || ''
            }

            await Order.updateOne(filter,orderUpdate,{new : true})
            const order = await Order.findOne(filter)          

            order.orderedItems.forEach(async (item) => {
                const product = await Product.find({_id : ObjectId(item.orderedItem).toString() })
                
                product[0].quantity = product[0].quantity - item.quantity
                await Product.updateOne({
                    _id : ObjectId(item.orderedItem).toString()
                },
                {
                    quantity : product[0].quantity
                },
                {new : true}
                )  
            },
            );

        }
        res.status(200).json(null)

}


module.exports = {
    webhook
}