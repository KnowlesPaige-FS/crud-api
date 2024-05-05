const passport = require('passport');
const Extractjwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');
const config = require('../../config');

const localOptions = {
    usernameField: 'email'
}

const localStrategy = new LocalStrategy(localOptions, async function(email, password, done){
    try {
        const user = await User.findOne({ email: email })
        if(!user){ return done(null, false) }
        const isMatch = await user.comparePassword(password)
        if(!isMatch){ return done(null, false) } 
        return done(null, user)
    } catch (err) {
        return done(err)
    }
})

const jwtOptions = {
    secretOrKey: config.secret,
    jwtFromRequest: Extractjwt.fromHeader('authorization')
}

const jwtStrategy = new JwtStrategy(jwtOptions, async function(payload, done){
    try {
        const user = await User.findById(payload.sub)
        if(user) {
            done(null, user)
        } else {
            done(null, false)
        }
    } catch(err) {
        done(err, false)
    }
})

passport.use(localStrategy)
passport.use(jwtStrategy)