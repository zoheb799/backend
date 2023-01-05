const express = require('express');
const { request, response } = require('express');
const router = express.Router();

require('../db/connection');
const register = require("../model/register");
const order = require("../model/orders");
const Contact = require("../model/contact us");


router.get('/', (request, response) => {
    response.send("hello world!");
});

router.post('/Register', (request, response) => {
    const { Name, Email, PhNumber, Password, CPassword } = request.body;
    if (!Name || !Email || !PhNumber || !Password || !CPassword) {
        return response.status(422).json({ err: "blanks cannot be empty" });
    }
    register.findOne({ Email: Email })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this email is already exist" });
            }
            const registers = new register({ Name, Email, PhNumber, Password, CPassword });

            registers.save().then(() => {
                response.status(201).json({ message: "Registration sucessfull" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/Register', (request, response) => {

    register.find()
        .then((users) => {
            console.log(users);
            response.json(users);
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});

//the order section
router.post('/Orders', (request, response) => {
    const { Name, PhNumber, OrderDetails, OrderPrice, ChooseTime, DeliveryAddress } = request.body;
    if (!Name || !PhNumber || !OrderDetails || !OrderPrice || !ChooseTime || !DeliveryAddress) {
        return response.status(422).json({ err: "Orders cannot be empty" });
    }
    order.findOne({ ChooseTime: ChooseTime })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this  is already running" });
            }
            const orders = new order({ Name, PhNumber, OrderDetails, OrderPrice, ChooseTime, DeliveryAddress });

            orders.save().then(() => {
                response.status(201).json({ message: "Order sucessfull" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/Orders', (request, response) => {

    order.find()
        .then((Orders) => {
            console.log(Orders);
            response.json(Orders);
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});

// Contact

router.post('/Contact', (request, response) => {
    const { Name, Email, TextBox } = request.body;
    if (!Name || !Email || !TextBox ) {
        return response.status(422).json({ err: "Fields cannot be empty" });
    }
    Contact.findOne({ Name: Name })
        .then((userexist) => {
            if (userexist) {
                return response.status(422).json({ err: "this  is already running" });
            }
            const Contacts = new Contact({ Name, Email, TextBox });

            Contacts.save().then(() => {
                response.status(201).json({ message: "Message sent sucessfully" });
            }).catch((err) => response.status(500).json({ err }));
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
router.get('/Contact', (request, response) => {

    Contact.find()
        .then((Contacts) => {
            console.log(Contacts);
            response.json(Contacts);
        }).catch(err => { console.log({ err: "error hai yaaro" }); });
});
module.exports = router;