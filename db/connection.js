const mongoose = require('mongoose')

const connectionString = process.env.DATABASE
mongoose.connect(connectionString, {
   
})
    .then(() => console.log("Mongodb Atlas Conncted Successfully"))
    .catch((error) => console.log(`Failed to connect to the database : ${error}`))