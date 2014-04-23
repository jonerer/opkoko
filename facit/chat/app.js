var express = require('express'),
    app = express(),
    cons = require('consolidate'),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server)

server.listen(3000)
app.engine('hbs', cons.handlebars)
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
app.use(express.static('static'))

var coll;
require('mongodb').MongoClient.connect('mongodb://localhost:27017/opkoko', function (err, res) {
    coll = res.collection('texts')
})

app.get('/', function (req, res) {
    coll.find().toArray(function (err, results) {
        res.render('index.hbs', { texts: results })
    })
})

io.sockets.on('connection', function (socket) {
    io.sockets.emit('text', { text: 'New user connected '})
    socket.on('text', function (data) {
        coll.insert(data, function () {
            io.sockets.emit('text', data)
        })
    })
})
