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

io.sockets.on('connection', function (socket) {
    io.sockets.emit('text', { text: 'New user connected '})
    socket.on('text', function (data) {
        io.sockets.emit('text', data)
    })
})
