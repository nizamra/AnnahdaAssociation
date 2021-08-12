const { Person } = require('../models/model');
const passport = require('passport');
const passportConfig = require('../passportFile/passport');
const JWT = require('jsonwebtoken');
const signToken = personId => {
    return JWT.sign({
        iss: "Hammoze",
        sub: personId
    }, "Hammoze", { expiresIn: "2d" });
}

module.exports.createPerson = (request, response) => {
    const { username, passwd, role } = request.body;
    Person.create({
        username,
        passwd,
        role
    })
        .then(person => response.json(person))
        .catch(err => response.status(400).json(err));
}

module.exports.regester = (request, response) => {
    const { username, passwd, role } = request.body.body;
    Person.findOne({ username }, (err, person) => {
        if (err)
            response.status(500).json({ message: { msgBody: "Error in the controller prosess", msgError: true } });
        if (person)
            response.status(400).json({ message: { msgBody: "This name exists", msgError: true } });
        else {
            const newPerson = new Person({ username, passwd, role });
            newPerson.save(err => {
                if (err) {
                    console.log(err);
                    response.status(500).json({ message: { msgBody: "Error while creating new user", msgError: true } });
                }
                else {
                    response.status(201).json({ message: { msgBody: "created new user", msgError: false } });
                }
            })
        }
    })
}

module.exports.login = (request, response) => {
    console.log(request);
    if (request.isAuthenticated()) {
        const { _id, username, role } = request.person;
        const token = signToken(_id);
        response.cookie('access_token', token, { httpOnly: true, sameSite: true });
        response.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
}

module.exports.logout = (request, response) => {
    response.clearCookie('access_token');
    response.json({ person: { username: "", role: "" }, success: true });
};

module.exports.admin = (request, response) => {
    if (request.person.role === 'superAdmin') {
        response.status(200).json({ message: { msgBody: "You're Super Admin", msgError: false } })
    }
    else
        response.status(403).json({ message: { msgBody: "You're not allowed here", msgError: true } })
};

module.exports.authenticated = (request, response) => {
    const { username, role } = request.person;
    response.status(200).json({ isAuthenticated: true, user: { username, role } });
};

// module.exports.getAllProducts = (request, response) => {
//     Product.find({})
//         .then(products => response.json(products))
//         .catch(err => response.json(err))
// }

// module.exports.getProduct = (request, response) => {
//     Product.findOne({ _id: request.params.id })
//         .then(product => response.json(product))
//         .catch(err => response.json(err))
// }