const express = require('express');
const socket = require('socket.io');

const app = express();

app.use(express.static('public'));

const server = app.listen(4000, () => console.log('Listening on 4000'));

const io = socket(server);

io.on('connection', (socket) => {
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  });

  socket.on('typing', (handle) => {
    socket.broadcast.emit('typing', handle);
  });
});