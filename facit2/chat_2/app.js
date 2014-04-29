var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server)

server.listen(3000)
app.use(express.static('static'))
app.set('views', 'views')
app.engine('.html', require('ejs').renderFile)

app.get('/', function (req, res) {
    res.render('index.html')
})

var history = [];
io.sockets.on('connection', function (socket) {
    function send(obj) {
        history.push(obj);
        io.sockets.emit('text', obj)
    }
    history.forEach(function(thing) {
        socket.emit('text', thing)
    })
    send({ text: 'New user connected '})
    socket.on('text', function (data) {
        send(data)
    })
})
