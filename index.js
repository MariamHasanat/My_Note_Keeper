const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const  router  = require('./routes/note-router');


const app = express();
app.use(express.json());
app.use(cors());

app.use('/notes', router);

const port = 3001;
const DateBaseURL = process.env.DATABASE_URL;


app.get('/', (req, res) => {
    console.log('connected to server successfully');
})
const dbConnect = () => {
    mongoose.connect(DateBaseURL)
        .then(() => {
            console.log(`😁 Resolved : connect to database successfully 🔥`);
        })
        .catch((error) => {
            console.log(`🤔 Error : failed to connect to database due to this error ${error}`);

        })
};


app.listen(port, () => {
    console.log(`connect to server with port : ${port}`);
    dbConnect();
})
