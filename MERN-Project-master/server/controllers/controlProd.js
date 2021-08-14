const { Product } = require('../models/modelProd');
// const multer = require('multer')

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, './client/public/pictures');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname)
//     }
// })

// const upload = multer({ storage: storage });
// exports.upload = upload;
var fs = require('fs');
var path = require('path');

module.exports.createProduct = (request, response) => {
    const url = request.protocol + "://" + request.get("host");
    console.log(request.file.originalname)
    const { title, code, price, status, description } = request.body;
    Product.create({
        title,
        code,
        price,
        pic: url + "/images/" + request.file.originalname,
        status,
        description
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProducts = (request, response) => {
    Product.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getAllAvailable = (request, response) => {
    Task.find({status:'available'})
        .then(tasks => response.json(tasks))
        .catch(err => response.status(400).json(err))
}

module.exports.getProduct = (request, response) => {
    Product.findOne({ _id: request.params.id })
        .then(product => response.json(product))
        .catch(err => response.json(err))
}

module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body.product, { new: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}

module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
