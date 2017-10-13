// Make connection
const socket = io.connect('http://localhost:4000');

// Query DOM
const message = document.getElementById('message');
const handle = document.getElementById('handle');
const button = document.getElementById('send');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');

// Emit events
button.addEventListener('click', () => {
  socket.emit('chat', {
    handle: handle.value,
    message: message.value
  });
  message.value = '';
  message.focus();
});

message.addEventListener('keypress', () => {
  socket.emit('typing', handle.value);
});

// Listen for events
socket.on('chat', ({ handle, message }) => {
  feedback.innerHTML = '';
  output.innerHTML += `
    <p><strong>${handle}: </strong>${message}</p>
  `;
});

socket.on('typing', (handle) => {
  feedback.innerHTML = `
    <p><em>${handle} is typing a message...</em></p>
  `;
});