const { ObjectId } = require("mongodb")
const stripe = require("../libs/stripe")
const Order = require("../models/orderModel")
const Product = require("../models/productModel")
require('dotenv').config()


const corsHeaders = {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers" : "Content-Type, Authorization"
}

const handleAuthorization = async (req,res) => {
    res.json({}, { headers : corsHeaders })
}

const checkout = async (req,res) => {
    try {
        const {storeId} = req.params
        const productIds = req.body.productId
        

        if(!productIds || productIds.length === 0) {
            res.status(400).send({ message : "product ids required" })
        }

        const products = await Product.find({
            '_id' : productIds
        })



        

        const line_items  = []

        products.forEach((product) => {
            line_items.push({
                quantity : 1,
                price_data : {
                    currency : "USD",
                    product_data : {
                        name : product.name
                    },
                    unit_amount : parseFloat(product.price) * 100
                }
            })
        })



        const data = {
            storeId,
            orderedItems : products.map((product) =>  ({
                orderedItem : product._id
            })),
            phone : "###########",
            address : "none",
            createdAt : new Date(),
            updatedAt : new Date()
        }



        const order = await Order.create(data)

        const session = await stripe.checkout.sessions.create({
            line_items,
            mode: "payment",
            billing_address_collection : "required",
            phone_number_collection : {
                enabled : true
            },
            success_url : `${process.env.FRONTEND_STORE_URL}/cart?success=1`,
            cancel_url : `${process.env.FRONTEND_STORE_URL}/cart?canceled=1`,
            metadata : { orderId : ObjectId(order._id).toString()}
        })




        res.status(200).json({ url : session.url, headers : corsHeaders })
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
}


module.exports = {
    handleAuthorization,
    checkout
}