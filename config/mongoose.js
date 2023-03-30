const mongoose = require('mongoose');
const dotenv=require('dotenv').config();

mongoose.set('strictQuery',false);

mongoose.connect(process.env.MONGO_URL||'mongodb://localhost/UrlShortner');

const db = mongoose.connection;

db.on('error',()=>{
    console.log("Error In Connect Mongodb");
})

db.once('open',()=>{
    console.log("DB connect successfully..");
})

module.exports=db;