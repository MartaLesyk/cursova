const express = require('express');
const router = express.Router();
const { Product } = require("../models/products");

router.get('/', (req, res)=>{


    (async () => {

        // Product.create({
        //     id: 1,
        //     name: 'Легка блузка з квітковим принтом',
        //     prise: 595 ,
        //     about: 'Легка креп-шовкова блузка з квітковим принтом. Модель прямого крою, защіплюється на гудзик ззаду.',
        //     type: 'Блузка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/b1/legkaya-bluzka-s-cvetochnym-printom-10250-1.jpg'
        // })
        // Product.create({
        //     id: 2,
        //     name: 'Приталена блузка в горох із застібкою по спинці синя',
        //     prise: 600,
        //     about: 'Силуетна блузка із хлопоку. Ізюминка моделі - застібка по спинці. Пояс в комплекті. Чудово уміщається з однотонними брюками або спідницею. ',
        //     type: 'Блузка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/a1/pritalennaya-bluzka-v-goroh-s-molniey-po-spinke-sinyaya-38410-1.jpg'
        // })
        // Product.create({
        //     id: 3,
        //     name: 'Біла блузка вільного крою з завязками',
        //     prise: 449 ,
        //     about: 'Блузка вільного крою з завязками на рукавах.',
        //     type: 'Блузка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/e1/belaya-luzka-svobodnogo-kroya-s-zavyazkami-47440-1.jpg'
        // })
        // Product.create({
        //     id: 4,
        //     name: 'Блузка вільного крою в синю полоску',
        //     prise: 525,
        //     about: 'Блузка із софта в полоску з эластичною деталлю на горловині, в поясі і на манджетах.',
        //     type: 'Блузка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/20/bluzka-svobodnogo-kroya-s-baskoy-v-sinyuyu-polosku-46788-1.jpg'
        // })
        // Product.create({
        //     id: 5,
        //     name: 'Біла блузка прямого крою з принтом на полочці',
        //     prise: 499,
        //     about: 'Блузка прямого крою з барвистим принтом на полочці. На спинці невеликий розріз і застібка на гудзик.',
        //     type: 'Блузка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/b1/belaya-bluzka-pryamogo-kroya-s-printom-na-polochke-45438-1.jpg'
        // })
        // Product.create({
        //     id: 6,
        //     name: 'Розмальована спідниця з кишенями голуба',
        //     prise: 599,
        //     about: 'Спідниця-міні з тіара з эластичною деталлю по спинці. Модель з вмісткими кишенями в бокових швах. Пояс в комплекті',
        //     type: 'Спідниця',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/ab/raskleshenaya-yubka-s-karmanami-golubaya-47315-1.jpg'
        // })
        // Product.create({
        //     id: 7,
        //     name: 'Розмальована спідниця червоного кольору',
        //     prise: 599,
        //     about: 'Розмальована спідниця червоного кольору',
        //     type: 'Спідниця',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/56/raskleshennaya-yubka-krasnogo-cveta-46708-1.jpg'})
        // Product.create({
        //     id: 8,
        //     name: 'Розмальована спідниця чорного кольору',
        //     prise: 789,
        //     about: 'Лаконічна спідниця-міді із шовку Армані. Талія по спинці виконана эластичною деталлю.',
        //     type: 'Спідниця',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/56/raskleshennaya-yubka-chernogo-cveta-46707-1.jpg'
        // })
        // Product.create({
        //     id: 9,
        //     name: 'Синя спідниця трапеція на блискавці',
        //     prise: 499,
        //     about: 'Джинсова спідниця контрасного кольору. Виріб з накладними кишеньками. Застібається ззаду на потайну блискавку',
        //     type: 'Спідниця',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/f9/sinyaya-yubka-trapeciya-na-molnii-47002-1.jpg'
        // })
        // Product.create({
        //     id: 10,
        //     name: 'Синя майка вільного крою',
        //     prise: 300,
        //     about: 'Комфортна майка вільного крою.',
        //     type: 'Майка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/e0/sinyaya-mayka-svobodnogo-kroya-47010-1.jpg'
        // })
        // Product.create({
        //     id: 11,
        //     name: 'Лилова майка прямого крою з V-вирізом',
        //     prise: 660,
        //     about: 'Невагома майка пастельних відтінків з легкого софта. Модель доповнить ...',
        //     type: 'Майка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/b7/lilovaya-mayka-pryamogo-kroya-s-v-vyrezom-38559-1.jpg'
        // })
        // Product.create({
        //     id: 12,
        //     name: 'В'язаный топ з контрасною вставкою пудровий',
        //     prise: 395,
        //     about: 'В'язаный топ з контрасною горизонтальною вставкою. Добре підійде для створення різних образів.',
        //     type: 'Майка',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/8b/vyazanyy-top-s-kontrastnoy-vstavkoy-pudrovyy-22300-1.jpg'
        // })
        // Product.create({
        //     id: 13,
        //     name: 'Біле плаття в червоний горох з воланом по низу',
        //     prise: 899,
        //     about: 'Повсякденне плаття без рукавів із хлопкової тканини у великий червоний "горох". Відділена талія на ризинці з вузькою декоративною зборкою.',
        //     type: 'Плаття',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/64/beloe-plate-v-krasnyy-goroh-s-volanom-po-nizu-48052-1.jpg'
        // })
        // Product.create({
        //     id: 14,
        //     name: 'Широке плаття–міді із прошви з підкладкою. Рожеве ',
        //     prise: 999,
        //     about: 'Широке плаття – міді із прошви з підкладкою. Застібається на гудзик по спинці.',
        //     type: 'Плаття',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/7b/raskleshennoe-plate-midi-iz-proshvy-s-podkladkoy-rozovoe-48279-1.jpg'
        // })
        // Product.create({
        //     id: 15,
        //     name: 'Вільний сарафан в клітинку',
        //     prise: 699,
        //     about: 'Вільний сарафан в клітинку. Модель з широкою призбиркою по низу, по спинці эластична деталь.',
        //     type: 'Плаття',
        //     img: 'https://cdn.dressa.com.ua/ostrov-cache/sylius_extra_large/ba/sarafan-v-krasnuyu-kletku-s-volanom-po-nizu-46759-1.jpg'
        // })


        let users = await Product.find({});
        res.send(users)

    })();

});

router.get('/dress', (req, res)=>{


    (async () => {

        let product = await Product.find({type: 'Плаття'});
        res.send(product)

    })();

});

router.get('/mike', (req, res)=>{


    (async () => {

        let product = await Product.find({type: 'Майка'});
        res.send(product)

    })();

});

router.get('/spid', (req, res)=>{


    (async () => {

        let product = await Product.find({type: 'Спідниця'});
        res.send(product)

    })();

});

router.get('/bl', (req, res)=>{


    (async () => {

        let product = await Product.find({type: 'Блузка'});
        res.send(product)

    })();

});

router.get('/:id', (req, res)=>{


    (async () => {

        let product = await Product.findOne({id: req.params.id});
        res.send(product)

    })();

});

router.put('/addPr/', (req, res)=>{


    (async () => {

        // console.log(req.body);
        // await User.update({id: req.body.userId},{ $push: { cart: req.body.product } })
        //
        // let user = await User.findOne({id: req.body.userId});
        // res.send(user)

    })();

});

module.exports = router;
