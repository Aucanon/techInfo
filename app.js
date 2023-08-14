const config =  require('./config/index')
const cors = require('cors')
const morgan = require('morgan')
const express = require('express')

const app = express()

// 引入中间件
app.use(express.json())

app.use(cors())

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.send('ooo')
})

app.listen(config.app.port, () => {
    console.log(`Running at http://localhost:${config.app.port}`)
})