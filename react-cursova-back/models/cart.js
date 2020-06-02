const mongoose = require('mongoose');


const cartSchema = mongoose.Schema({
    id: Number,
    name: String,
    prise: Number,
    about: String,
    type: String,
    img: String,
    size: String
}, { versionKey: false });

const Cart = mongoose.model('carts', cartSchema);

module.exports = { Cart }
