const express = require('express')
const request = require('request')
const cors = require('cors')

const app = express()
app.use(cors())

app.get("/", (req, res) => {
    res.send('working')
})

app.get("/test", (req, res) => {
    res.json({ 'msg': 'connected to backend' })
})

app.get("/fetchbootstrap", (req, res) => {
    request("https://fantasy.premierleague.com/api/bootstrap-static/", function (error, response, body) {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
        }

        res.send(body)
    })
})

app.listen(4001, () => {
    console.log('server is running at port 4001')
})