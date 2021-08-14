const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('mongoose-type-email');
var uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name must be present"],
        minlength: [3, "Name must be at lest 3 charchtars"]
    },
    email: {
        type: mongoose.SchemaTypes.Email,
        required: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: [8, "Password must be at least 8 charachters"]
    },
    role: {
        type: String,
        enum: ['superAdmin', 'admin', 'secritary'],
        defult: 'admin',
        required: true,
    }
}, { timestamps: true });

UserSchema.pre('save', function (next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
        if (err) {
            return next(err);
        }

        this.password = passwordHash;
        next();
    });
});

UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        else {
            if (!isMatch) {
                return cb(null, isMatch);
            }
            return cb(null, this);
        }
    })
}

module.exports.UserSchema = UserSchema
module.exports.User = mongoose.model('User', UserSchema);
UserSchema.plugin(uniqueValidator);