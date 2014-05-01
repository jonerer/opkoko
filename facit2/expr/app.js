var app = require('express')()

app.get('/', function (req, res) {
    res.send('weo')
})

app.get('/delayed', function (req, res) {
    setTimeout(function () {
        res.send('delayed')
    }, 1000)
})

module.exports = app