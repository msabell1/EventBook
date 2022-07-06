const express = require("express");
const Events = require("../models/Event");

const router = express.Router();

// Get all events
router.get('/', (req, res) => {
    Events.find({})
        .then(events => res.status(200).json({ events: events }))
})

// Get single event
router.get('/:event', (req, res) => {
    Events.find({ Event: req.params.event })
        .then(event => res.status(200).json({ event: event }))
})

// Post new event
router.post('/', (req, res) => {
    const data = req.body;
    Events.create(data)
        .then(event => res.status(201).json({ event: event }))
})

// Patch update event
router.patch('/:event', (req, res) => {
    Events.find({ Event: req.params.event })
        .then(event => {
            const id = event._id;
            const data = req.body;
            Events.findByIdAndUpdate(id, data, { new: true })
                .then(event => res.status(200).json({ event: event }))
        })

})

// Delete single event
router.delete('/:event', (req, res) => {
    Events.find({ Event: req.params.event })
        .then(event => {
            const id = event._id;
            Events.findByIdAndDelete(id)
                .then(() => res.status(204))
        })
})


module.exports = router;