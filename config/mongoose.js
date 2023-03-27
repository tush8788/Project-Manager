const mongoose = require('mongoose');

mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost/UrlShortner');

const db = mongoose.connection;

db.on('error',()=>{
    console.log("Error In Connect Mongodb");
})

db.once('open',()=>{
    console.log("DB connect successfully..");
})

module.exports=db;