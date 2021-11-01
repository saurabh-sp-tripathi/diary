const express = require('express')
const https = require('https')

const app = express()
const port = 3000

const addServiceOpt = {
    hostname: 'localhost',
    port: 4001,
    path: 'add',
    method: 'GET'
}

app.get('/', (req, res) => {
    res.send('hello world!!')

    https.request
})

app.get('/add/2/8', (req, res) => {
    
})

app.listen(port, () => {
    console.log(`App listening at http://<hostname>:${port}`)
})