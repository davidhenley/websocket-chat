// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const button = document.getElementById('send');
const output = document.getElementById('output');

// Emit events
button.addEventListener('click', () => {
  socket.emit('chat', {
    handle: handle.value,
    message: message.value
  });
});