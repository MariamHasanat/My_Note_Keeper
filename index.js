const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();

const dbConnect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/My_Note_Keeper")
        .then(
            () => {
                console.log(`⚡️ [server] : connected to mongodb`);
            }
        )
        .catch((error) => {
            console.log(`⚡️ [server] : failed to connect to mongodb ${error}`);
        })
};
const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Hello Mariam , server running successfully ");
    dbConnect();
})