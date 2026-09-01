// const express = require('express')
// const dotenv = require('dotenv')
// const { MongoClient } = require('mongodb'); 
// const bodyparser = require('body-parser')
// const cors = require('cors')

// dotenv.config()


// // Connecting to the MongoDB Client
// const url = process.env.MONGO_URI;
// const client = new MongoClient(url);
// client.connect();

// // App & Database
// const dbName = process.env.DB_NAME 
// const app = express()
// const port = 3000 

// // Middleware
// app.use(bodyparser.json())
// app.use(cors())


// // Get all the passwords
// app.get('/', async (req, res) => {
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.find({}).toArray();
//     res.json(findResult)
// })

// // Save a password
// app.post('/', async (req, res) => { 
//     const password = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.insertOne(password);
//     res.send({success: true, result: findResult})
// })

// // Delete a password by id
// app.delete('/', async (req, res) => { 
//     const password = req.body
//     const db = client.db(dbName);
//     const collection = db.collection('passwords');
//     const findResult = await collection.deleteOne(password);
//     res.send({success: true, result: findResult})
// })


// app.listen(port, () => {
//     console.log(`Example app listening on  http://localhost:${port}`)
// })



const express = require('express')
const dotenv = require('dotenv')
const { MongoClient } = require('mongodb')
const bodyparser = require('body-parser')
const cors = require('cors')

dotenv.config()

const app = express()
const port = 3000
const dbName = process.env.DB_NAME
const url = process.env.MONGO_URI
const client = new MongoClient(url)

// Middleware
app.use(bodyparser.json())
app.use(cors())

// GET all passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const data = await collection.find({}).toArray()
    res.json(data)
})

// SAVE password (NO DELETE HERE)
app.post('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const result = await collection.insertOne(req.body)
    res.json({ success: true, result })
})

// DELETE password BY id ONLY
app.delete('/', async (req, res) => {
    const db = client.db(dbName)
    const collection = db.collection('passwords')
    const result = await collection.deleteOne({ id: req.body.id })
    res.json({ success: true, result })
})

// START SERVER AFTER DB CONNECT
async function startServer() {
    await client.connect()
    console.log("MongoDB connected")
    app.listen(port, () => {
        console.log(`Example app listening on http://localhost:${port}`)
    })
}

startServer()
