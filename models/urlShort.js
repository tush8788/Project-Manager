const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    short:{
        type:String,
        unique:true
    }
},{
    timestamps:true
});

const Short=mongoose.model("Short",urlSchema);

module.exports=Short;