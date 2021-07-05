const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
        uppercase: true,
    },
    rollNo:{
        type:String,
        required:true,
        uppercase: true,

    },
    English:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    physics:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    Maths:{
        type:Number,
        required:true,
        min:0,
        max:100
    },
    Chemistry:{
        type:Number,
        required:true,
        uppercase: true,
        min:0,
        max:100

    },
        
})

const Result = mongoose.model('result',resultSchema);

module.exports = Result;