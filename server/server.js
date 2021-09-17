const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../index.html'))
})

app.use('/css',express.static(__dirname + '/style.css')); 

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Transcribing on port ${port}`)
})