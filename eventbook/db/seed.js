const Event = require('../models/Event')
const Guest = require('../models/Guest')

const eventData = require('./eventSeed.json')
const guestData = require('./guestSeed.json')

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