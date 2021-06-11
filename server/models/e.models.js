const mongoose = require('mongoose')

const ESchema = new mongoose.Schema({
    name: {
        type: String,
        unqiue : true,
        required: [
            true,
            'must have name'
        ],
        // unique: [
        //     true,
        //     'Name must be UNIQE'
        // ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    type: {
        type: String,
        required: [
            true,
            'must have type'
        ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    description: {
        type: String,
        required: [
            true,
            'must have Desc'
        ],
        minlength: [3, "{PATH} must be at least {MINLENGTH} characters"]
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,

    },
    skill3: {
        type: String,
    },

}, { timestamps: true })

module.exports.E = mongoose.model('E', ESchema)