const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({

    Name: {
        type: String,
        required: true
    
    },
    PhNumber: {
        type: Number,
        required: true
    },
    OrderDetails: {
        type: String,
        required: true
    
    },
    OrderPrice: {
        type: Number,
        required: true
    
    },
    ChooseTime: {
        type: String,
        required: true
    },
    DeliveryAddress: {
        type: String,
        required: true
    }

})
const order = mongoose.model('order',OrderSchema);
module.exports = order;