const  mongoose = require('mongoose')

const usersSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'ingresa tu nombre']
    },
    email: {
        type: String,
        required: [true, 'ingresa tu email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'ingresa tu password']
    },
    esAdmin: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

module.exports = mongoose.model('User', usersSchema)