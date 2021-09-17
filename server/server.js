const express = require('express')
const path = require('path')

const app = express()

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../client/index.html"))
})

app.use("/css", express.static(path.join(__dirname, "../client/style.css")))

app.use("/js", express.static(path.join(__dirname, "../client/index.js")))

const port = process.env.PORT || 4000

app.listen(port, ()=>{
    console.log(`Transcribing on port ${port}`)
})