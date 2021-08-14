const { User } = require('../models/user.models')
// import menuitem model
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require('jsonwebtoken');

const signToken = userID => {
    return JWT.sign({
        iss: "khalil",
        sub: userID,
    }, "khalil", { expiresIn: "1h" });
}

// import controller Image saving in Database
var fs = require('fs');
var path = require('path');


module.exports.updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: request.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json(err))
}

module.exports.login = (req, res) => {
    console.log("login....")
    console.log(req)
    if (req.isAuthenticated()) {
        const { _id, name, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { name, role, _id } });
    }
}

module.exports.getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then(user => res.json(user))
        .catch(err => res.json(err))
}

module.exports.getAllrestaurants = (req, res) => {
    User.find({})
        .then(restaurants => res.json(restaurants.filter((item) => item.role == 'restaurant')))
        .catch(err => res.json(err))
}

module.exports.getAllDeliveries = (req, res) => {
    User.find({})
        .then(restaurants => res.json(restaurants.filter((item) => item.role == 'delivery')))
        .catch(err => res.json(err))
}
module.exports.getAllCustomers = (req, res) => {
    User.find({})
        .then(restaurants => res.json(restaurants.filter((item) => item.role == 'customer')))
        .catch(err => res.json(err))
}

module.exports.getAllUsers = (req, res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(err))
}
