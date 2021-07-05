const mongoose = require('mongoose');

const Result = require('./models/result')

mongoose.connect('mongodb://localhost:27017/EasyResult', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MOGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })

    // const r = new Result({
    //     name:"abhey",
    //     rollNo:"19/it02",
    //     subject:{
    //         dsa:25
    //     }
    // })
    
    // r.save().

    // const seedResults=[
        
    //     {  name:"ABHAY BHARDWAJ",
    //        rollNo:"19it02",
    //        English: 52.5,
    //        physics: 75.5,
    //        Maths: 79,
    //        Chemistry:87
            
    //     },
    //     {
    //         name:"ABHAY KUMAR",
    //         rollNo:"19it03",
    //         English: 12.5,
    //        physics: 75.5,
    //        Maths: 79,
    //        Chemistry:87
    //         },
    //     {
    //         name:"AKSHIT KHOLI",
    //         rollNo:"19it04",
    //         English: 92.5,
    //         physics: 75.5,
    //         Maths: 79,
    //         Chemistry:87
    //         }
        
    // ]

    // Result.insertMany(seedResults)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })