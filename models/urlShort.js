const mongoose = require('mongoose');
const shortid=require('shortid');

const urlSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true,
    },
    short:{
        type:String,
        default:shortid.generate()
    }
},{
    timestamps:true
});

const Short=mongoose.model("Short",urlSchema);

module.exports=Short;