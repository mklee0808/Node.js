const mongoose = require("mongoose")

mongoose
    .connect('mongodb://127.0.0.1:27017/addrs', {useNewUrlParser : true})
    .catch(e => {
        console.log('연결 오류', e.message)
    })

const db = mongoose.connection

module.exports = db