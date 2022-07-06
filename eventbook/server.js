require('dotenv').config();
const express = require('express');
const cors = require('cors');

const eventController = require('./controllers/event-controller');
const guestController = require('./controllers/guest-controller');

const app = express();

app.set("PORT", process.env.PORT || 8080);

app.use(cors())
 
app.use(express.json());

app.use('/events',eventController);
app.use('/guest',guestController);

app.listen(app.get("PORT"), () => {
    console.log(`PORT: ${app.get("PORT")}`);
});