const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const items = require('./routes/api/createUser')

const app = express();

app.use(bodyParse.json());

const db = require('./config/keys').mongoURI; // need to setup a config file
const port = process.env.port || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Sucessfully connected to the DB on ' + db))
    .catch((err) => console.log(err))

app.use('/api/user', items)
app.listen(port, () => console.log('Listening on port: ' + port))