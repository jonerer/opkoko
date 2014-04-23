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

app.get('/', function (req, res) {
    res.render('index.hbs')
})

io.sockets.on('connection', function (socket) {
    io.sockets.emit('text', { text: 'New user connected '})
    socket.on('text', function (data) {
        io.sockets.emit('text', data)
    })
})
