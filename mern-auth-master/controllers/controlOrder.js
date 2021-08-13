const { Order } = require('../models/modelOrder');


module.exports.createOrder = (request, response) => {
    console.log('logging from creation')
    console.log(request.body)
    const { name, productCode, amount, mobile, address, status } = request.body;
    Order.create({
        name,
        productCode,
        amount,
        mobile,
        address,
        status
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllOrders = (request, response) => {
    Order.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getOrder = (request, response) => {
    Order.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateOrder = (request, response) => {
    Order.findOneAndUpdate({ _id: request.params.id }, request.body.product, { new: true })
        .then(updatedOrder => response.json(updatedOrder))
        .catch(err => response.json(err))
}

module.exports.deleteOrder = (request, response) => {
    Order.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
