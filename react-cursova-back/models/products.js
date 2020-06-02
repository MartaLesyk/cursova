const mongoose = require('mongoose');


const productSchema = mongoose.Schema({
    id: Number,
    name: String,
    prise: Number,
    about: String,
    type: String,
    img: String
}, { versionKey: false });

const Product = mongoose.model('products', productSchema);

module.exports = { Product }
