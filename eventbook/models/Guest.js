const mongoose = require('../db/connection')

const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: Number,
    about: String,
    images: [{
        data: Buffer,
        contentType: String
    }],
    messages: [String],
    events: [{
        ref: "Event",
        type: mongoose.Schema.Types.ObjectId
    }],
    ownedEvents: [{
        ref: "Event",
        type: mongoose.Schema.Types.ObjectId
    }],
    personalImage : {
        data: Buffer,
        contentType: String
    },
    email : String
})

module.exports = mongoose.model('Guest', guestSchema)