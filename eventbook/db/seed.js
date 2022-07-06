const Event = require('../models/Event')
const Guest = require('../models/Guest')

const eventData = require('./wineSeed.json')
const guestData = require('./dishSeed.json')

Event.deleteMany({}).then(() => {
    Event.create(eventData).then(eventList => {
        console.log(eventList)
    }).then(() => {
        Guest.deleteMany({}).then(() => {
            Guest.create(guestData).then(guestList => {
                console.log(guestList)
                process.exit()
            })
        })
    })
})