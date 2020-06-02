const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require("cors");
require('dotenv').config();

//set up express

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

const PORT = process.env.PORT || 5000;

// set up mongoose

const mongoURI = 'mongodb://localhost:27017/cursova'

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

var Users = require('./routes/Users')

app.use('/users', Users)
app.use('/products', require('./routes/products'));
app.use('/cart', require('./routes/cart'));

app.listen(PORT, () => console.log(`The server has started on port: ${PORT}`));
