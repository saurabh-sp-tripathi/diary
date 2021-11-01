const express = require('express')

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send("I am add service");
})

app.get('/add/:num1/:num2', (req, res) => {
    const num1 = Number(req.params.num1)
    const num2 = Number(req.params.num2)
    res.send('sum = '+(num1 + num2))
})

app.listen(port, () => {
    console.log(`App listening at http://<hostname>:${port}`)
})