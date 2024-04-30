const MongoClient = require('mongodb').MongoClient;
const { createServer } = require('http');

const port = 3001;
const hostName = '127.0.0.1'

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'MyNoteKeeper';

const server = createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end("ends successfully");
})

server.listen(port, hostName, ()=>{
    console.log(`server running @ http://${hostName}:${port}/`);
})

async function main() {
    const client = new MongoClient(url);
    await client.connect();

    const admin = client.db(dbName).admin();

    console.log(await admin.listDatabases());
}

main();