const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Result = require('./models/result');
const { addListener } = require('./models/result');

mongoose.connect('mongodb://localhost:27017/EasyResult', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MOGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!")
        console.log(err)
    })


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}))


app.use(methodOverride('_method'))
app.use(express.static('viewresult'))

app.get('/results',async(req,res) => {
    const results = await Result.find({})
    res.render('results/index',{results})
})

app.get('/results/NewResult',async(req,res) => {
    res.render('results/NewResult')
})
app.post('/results',async(req,res)=>{
    const newResult = new Result(req.body);
    await newResult.save();
    res.redirect(`/results/${newResult.rollNo}`)
})

app.get('/results/:rollno',async(req,res) => {
    const {rollno} = req.params;
    const result = await Result.findOne({rollNo:rollno});
    res.render('results/show',{result});
} )

app.get('/results/:rollno/edit',async(req,res) => {
    
    const {rollno} = req.params;
    const result = await Result.findOne({rollNo:rollno});
    res.render('results/edit',{result})
})

app.put('/results/:rollno', async(req,res)=>{
    const {rollno} = req.params;
    const result = await Result.findOneAndUpdate({rollNo:rollno},req.body,{runValidators:true,new:true});
    res.redirect(`/results/${result.rollNo}`)
})
app.delete('/results/:rollno',async(req,res) => {
    const {rollno} = req.params;
    const deletedResult = await Result.findOneAndDelete({rollNo:rollno});
    res.redirect('/results');
})

app.get('/results/viewresult',async(req,res)=>{
    res.send('./results/viewresult');
})


app.listen(3000,() => {
    console.log("APP IS LISTEN ON PORT 3000")
})