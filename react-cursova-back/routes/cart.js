const express = require('express');
const router = express.Router();
const { Cart } = require("../models/cart");


router.get('/cart', (req, res)=>{


    (async () => {

        console.log(22);
        let some = await Cart.find({});
        //
        console.log(some);

        res.send(some)

    })();

});

router.post('/', (req, res)=>{


    (async () => {

        console.log(req.body);
        Cart.create({
            id: req.body.product.id,
            name: req.body.product.name,
            prise: req.body.product.prise,
            about: req.body.product.about,
            type: req.body.product.type,
            img: req.body.product.img,
            size: req.body.size
        })
        //
        // let user = await User.findOne({id: req.body.userId});
        res.send(200)

    })();

});

module.exports = router;
