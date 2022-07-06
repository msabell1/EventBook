const mongoose = require('mongoose')

let mongoURI = ""

if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
    console.log('production: ',mongoURI)
} else {
    console.log('not production')
    mongoURI = "mongodb://localhost:27017/EventBook";
}

mongoose.connect(mongoURI)

module.exports = mongoose