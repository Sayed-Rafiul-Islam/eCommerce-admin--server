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
const productRouter = require('./routes/productRouter')
const adminRouter = require('./routes/adminRouter')
const inventoryRouter = require('./routes/inventoryRouter')
const monthlyRouter = require('./routes/monthlyRouter')
const sellRouter = require('./routes/sellRouter')
const varificationRouter = require('./routes/varification')


// Routes 
app.use('/api', productRouter) 
app.use('/api', adminRouter) 
app.use('/api', inventoryRouter) 
app.use('/api', monthlyRouter) 
app.use('/api', sellRouter) 
app.use('/api', varificationRouter) 

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
