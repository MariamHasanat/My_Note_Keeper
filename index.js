const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const  router  = require('./routes/note-router');


const app = express();
app.use(express.json());
app.use(cors());

// console.log(router);
app.use('/notes', router);

const port = 3001;

app.get('/', (req, res) => {
    console.log('connected to server successfully');
})
const dbConnect = () => {
    mongoose.connect('mongodb://127.0.0.1:27017/My_Note_Keeper')
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
