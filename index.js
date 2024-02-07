const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const app = express();
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))


// Route Imports
const adminRouter = require('./routes/adminRouter')
const varificationRouter = require('./routes/varification')

const storeRouter = require('./routes/storeRouter')
const billboardRouter = require('./routes/billboardRouter')
const categoryRouter = require('./routes/categoryRouter')
const sizeRouter = require('./routes/sizeRouter')
const colorRouter = require('./routes/colorRouter')
const productRouter = require('./routes/productRouter')
const orderRouter = require('./routes/orderRouter')


// Routes 
app.use('/api', adminRouter)  
app.use('/api', varificationRouter) 

app.use('/api', storeRouter) 
app.use('/api', billboardRouter) 
app.use('/api', categoryRouter) 
app.use('/api', sizeRouter) 
app.use('/api', colorRouter) 
app.use('/api', productRouter) 
app.use('/api', orderRouter) 

const mongoose = require('mongoose');

const uri = process.env.MONGO_URI;

const clientOptions = { 
    serverApi: { 
        version: '1', 
        strict: false, 
        deprecationErrors: true 
    } 
}



mongoose.connect(uri, clientOptions)
.then(()=> app.listen(port, () => {
    console.log(`Connected to Database and Listening to port ${port}`)
}))
.catch((err)=> console.log(err))


app.use('/', (req, res, next) => {
    res.send('running...')
})
