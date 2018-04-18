// Make connection
var socket = io.connect('http://localhost:4001');

var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Emit events

btn.addEventListener('click',function(){
    console.log("button clicked")
    socket.emit('chat',{
        message : message.value,
        handle: handle.value
    })
})

// Listen for events

socket.on('chat', function(data){
    output.innerHTML += '<p><strong>'+data.handle + ':</strong>' + data.message + '</p>';
})