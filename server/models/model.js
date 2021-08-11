const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const PersonSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    passwd: {
        type: String,
        required: true,
        min: 7
    },
    role: {
        type: String,
        enum: ['superAdmin', 'admin', 'root', 'dumm'],
        default: 'admin'
    }
}, { timestamps: true });
PersonSchema.pre('save', function (next) {
    if (!this.isModified('passwd'))
        return next();
    bcrypt.hash(this.passwd, 10, (err, passwdHash) => {
        if (err)
            return next(err);
        this.passwd = passwdHash;
        next();
    });
});
PersonSchema.methods.comparePasswds = function (passwd, cb) {
    bcrypt.compare(passwd, this.passwd, (err, isMatch) => {
        if (err)
            return cb(err);
        else {
            if (!isMatch)
                return cb(null, isMatch);
            return cb(null, this);

        }
    })
}
module.exports.Person = mongoose.model('Person', PersonSchema);
