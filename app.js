const express = require('express')
const config =  require('./config/index')

const app = express()

app.get('/', (req, res) => {
    res.send('ooo')
})

app.listen(config.app.port, () => {
    console.log(`Running at http://localhost:${config.app.port}`)
})