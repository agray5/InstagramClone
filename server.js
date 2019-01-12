const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const cors = require('cors');
const users = require('./routes/api/createUser')

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(bodyParse.json());

const db = require('./config/keys').mongoURI; // need to setup a config file
const port = process.env.port || 5000;

mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log('Sucessfully connected to the DB on ' + db))
    .catch((err) => console.log(err))

app.use('/api/user', cors(corsOptions), users)
app.listen(port, () => console.log('Listening on port: ' + port))