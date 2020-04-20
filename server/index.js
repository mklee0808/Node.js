const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const addrsRouter = require("./route/addrs-router")
const db = require("./db")
const app = express()
const port = 8000

db.once('open', () => {
    console.log('db 연결 성공')
})

db.on('error', err => {
    console.log('db 연결 에러')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())

app.listen(port, function(){
    console.log("서버 온" + port)
})

