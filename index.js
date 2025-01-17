require('dotenv').config()
const express = require("express");
const cors = require ('cors')
require('./db/connection')
const router = require ('./routes/router')


const server = express()
const PORT = 4000 || process.env.PORT

// export uploads 
server.use('/uploads' ,express.static('./uploads'));

server.use(cors())
server.use(express.json())

server.use(router)


server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})

server.get('/',(req,res)=>{
    res.send('EMS Server Started...')
})

