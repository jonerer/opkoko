var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    db = require('mongodb').MongoClient,
    coll;

server.listen(3000)
app.use(express.static('static'))
app.set('views', 'views')
app.engine('.html', require('ejs').renderFile)
db.connect('mongodb://localhost/opkokochat', function(err, db) {
    coll = db.collection('chats')
})

app.get('/', function (req, res) {
    res.render('index.html')
})

io.sockets.on('connection', function (socket) {
    function send(obj) {
        obj.time = new Date()
        coll.insert(obj, function(err, doc) {})
        io.sockets.emit('text', obj)
    }
    coll.find().sort('time').toArray(function(err, texts) {
        texts.forEach(function(text) {
            socket.emit('text', text)
        })
    })
    socket.on('text', function (data) {
        send(data)
    })
})
