let express = require('express');
let socket = require('socket.io');  

// App setup

let app = express();

let port = process.env.PORT || 4001;

let server = app.listen(port, function(){
    console.log("server is up and running in port :"+port);
})

// Static files
app.use(express.static("public"));

//socket.io setup

let io = socket(server);

io.on('connection',function(socket){
    console.log("made socket connection "+socket.id)

    socket.on('chat',function(data){
        console.log(data);
        io.sockets.emit('chat',data);
    })

});

