const express = require('express')
const app = express()
const router = app.router

//Get the Data -- Read 
router.get('/notes',(req, res)=>{
   res.send('')
   res.ok()
   res.close()
});
//create the data -- Create
router.post('/notes',(req, res)=>{
   res.send('')
   res.ok()
   res.close()
});

// put -- Update
router.put('/notes/:id',(req, res)=>{
   res.send('')
   res.ok()
   res.close()
});

// delete -- Delete
router.delete('/notes/:id',(req, res)=>{
   res.send('')
   res.ok()
   res.close()
});


const port = 3001;
app.listen(port)
// const MongoClient = require('mongodb').MongoClient;
// const { createServer } = require('http');
// import Note from './note'

// const hostName = '127.0.0.1'

// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'MyNoteKeeper';


// const server = createServer((req,res)=>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'application/json');
//     res.end("ends successfully");
// })

// server.listen(port, hostName, ()=>{
//     console.log(`server running @ http://${hostName}:${port}/`);
// })

// async function main() {
//     const client = new MongoClient(url);
//     await client.connect();
//     client.close();
// }

// main();