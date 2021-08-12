const {Person} = require("../models/model");
const bcrypt = require("bcryptjs");
const localStrategy = require("passport-local").Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((username, passwd, done) => {
      Person.findOne({ username: username }, (err, user) => {
        if (err) throw err;
        if (!user) return done(null, false);
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializePerson((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializePerson((id, cb) => {
    Person.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const JwtStrategy = require('passport-jwt').Strategy;
// const { Person } = require('../models/model');

// const cookieExtractor = req => {
//     let token = null;
//     if (req && req.cookies) {
//         token = req.cookies["access_token"];
//     }
//     return token;
// }

// passport.use(new JwtStrategy({
//     jwtFromRequest: cookieExtractor,
//     secretOrKey: "Hammoze"
// }, (payload, done) => {
//     Person.findById({ _id: payload.sub }, (err, person) => {
//         if (err)
//             return done(err, false);
//         if (!person)
//             return done(null, person);
//         else
//             return done(null, false);
//     });
// }));

// passport.use(new LocalStrategy((username, passwd, done) => {
//     Person.findOne({ username }, (err, person) => {
//         if (err)
//             return done(err);
//         if (!person)
//             return done(null, false);
//         person.comparePasswds(passwd, done);
//     });
// }));