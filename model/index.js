const mongoose = require('mongoose')
const config = require('../config')

//连接数据库
mongoose.connect(config.db.uri)

const db = mongoose.connection

db.on('error', err => {
    console.log('连接失败')
})

db.on('open', () => {
    console.log('数据库连接成功！')
})