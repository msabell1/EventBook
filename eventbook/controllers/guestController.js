const express = require("express");
const Guests = require("../models/Guest");

const router = express.Router();

// Get all guests
router.get('/', (req, res) => {
    Guests.find({})
        .then(guests => res.status(200).json({ guests: guests }))
})

// Get single guest
router.get('/:guest', (req, res) => {
    Guests.find({ Guest: req.params.guest })
        .then(guest => res.status(200).json({ guest: guest }))
})

// Post new guest
router.post('/', (req, res) => {
    const data = req.body;
    Guests.create(data)
        .then(guest => res.status(201).json({ guest: guest }))
})

// Patch update guest
router.patch('/:guest', (req, res) => {
    Guests.find({ Guest: req.params.guest })
        .then(guest => {
            const id = guest._id;
            const data = req.body;
            Guests.findByIdAndUpdate(id, data, { new: true })
                .then(guest => res.status(200).json({ guest: dish }))
        })

})

// Delete single guest
router.delete('/:guest', (req, res) => {
    Guests.find({ Guest: req.params.guest })
        .then(guest => {
            const id = guest._id;
            Guests.findByIdAndDelete(id)
                .then(() => res.status(204))
        })
})

module.exports = router;