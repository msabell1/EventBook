const mongoose = require('../db/connection')

const eventSchema = new mongoose.Schema({
    owner: {
        ref: "Guest",
        type: mongoose.Schema.Types.ObjectId
    },
    date: {
        type: Date,
        min: '2022-07-06'
    },
    description: String,
    guests: [{
        ref: "Guest",
        type: mongoose.Schema.Types.ObjectId
    }],
    images: [{
        data: Buffer,
        contentType: String
    }],
    messages: [String],
    qrCode: {
        data: Buffer,
        contentType: String
    }
})

module.exports = mongoose.model('Event', eventSchema)