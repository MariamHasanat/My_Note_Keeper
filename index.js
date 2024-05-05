const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config();


const app = express();
app.use(express.json());
const port = 3001;

const dbConnect = () =>{
    mongoose.connect('mongodb://127.0.0.1:27017/My_Note_Keeper')
    .then(()=>{
        console.log(`😁 Resolved : connect to database successfully 🔥`);
    })
    .catch((error)=>{
        console.log(`🤔 Error : failed to connect to database due to this error ${error}`);
        
    })
};


app.listen(port, ()=>{
    console.log(`connect to server with port : ${port}`);
    dbConnect();
})
