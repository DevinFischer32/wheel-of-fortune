const express = require('express')
const path = require('path')


const words = require('./words')

const app = express()
app.use(express.json())

//words
app.get('/words',(req,res)=>{
    let selectedWord = words.wordArr[Math.floor(Math.random() * words.wordArr.length)]
    res.status(200).send(selectedWord)
})

//main screen endpoint
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/index.html"))
})

//css
app.use("/css", express.static(path.join(__dirname, "../client/style.css")))
//js
app.use("/js", express.static(path.join(__dirname, "../client/index.js")))


//heroku port
const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Transcribing on port ${port}`)
})