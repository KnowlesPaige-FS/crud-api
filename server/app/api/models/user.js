const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const validateEmail = (email) => {
    return (/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)
}

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Invalid email']
    },
    password: {
        type: String,
        required: 'Password is required'
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
});

userSchema.pre('save' , function (next) {
    const user = this;
    if(user.isNew || user.isModified('password')) {
        // run hashing and salting
        bcrypt.genSalt(10, (err, salt) => {
            if(err){ return next(err) }
            bcrypt.hash(user.password, salt, null, (err, hash) => {
                if(err){ return next(err) }
                user.password = hash
                next()
            })
        })
    }else {
        // skip hashing and salting
        next();
    }
})

userSchema.methods.comparePassword = function(candidatePassword){
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if(err){ return reject(err) }
            return resolve(isMatch)
        })
    })
}


module.exports = mongoose.model('User', userSchema);
