var socket = require('socket.io'),
    http = require('http'),
    server = http.createServer(),
    socket = socket.listen(server);

socket.on('connection', function(connection) {
    console.log('User Connected');
    connection.on('message', function(data){
      console.log(data)
      connection.join(data.page)
      socket.in(data.page).emit('message', data.msg);
    });
});

server.listen(3000, function(){
    console.log('Server started');
});
