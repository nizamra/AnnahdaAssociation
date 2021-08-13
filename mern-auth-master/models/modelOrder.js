const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        minlength: [4, "Name must be at least 4 characters long"]
    },
    productCode: {
        type: String,
        required: [true, "Code is required"],
    },
    amount: {
        type: Number,
        required: true,
    },
    mobile: {
        type: String,
        minlength: [6, "Number must be full"],
        maxlength: [15, "Number should be shorter"],
        required: true
    },
    address: {
        type: String,
    },
    status: {
        type: String,
        enum: ['waiting', 'working', 'done'],
        default: 'waiting'
    }
}, { timestamps: true });
module.exports.Order = mongoose.model('Order', OrderSchema);
