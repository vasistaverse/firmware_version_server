const express = require('express');
const { default: mongoose } = require('mongoose');
const {versionDbModel} = require('./schemas.js')


const app = express();


app.use(express.static('.'));

mongoose.connect('mongodb://localhost:27017/versionDB')

app.listen(1000, ()=>{
    console.log('server listening at 1000')
})