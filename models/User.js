import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const { isEmail } = require('validator');


const UserSchema = new Schema({
    name: {
        firstName: { type: String },
        lastName: { type: String },
        required: true
    },
    email:{
        type: String,
        required: [true, 'Proszę podaj adres email'],
        unique: true,
        lowercase:true,
        validate: [isEmail, 'Proszę podaj poprawny email']
    },
    password: {
        type: String,
        required: [true, 'Proszę podaj poprawne hasło'],
        minlenght: [8, 'Minimalna długość hasła to 8 znaków']
    },
    register_date: {
        type: Date,
        default: Date.now
    },
})

module.exports = User = mongoose.model('user', UserSchema);