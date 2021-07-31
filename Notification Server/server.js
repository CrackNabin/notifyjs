var express = require("express");
var cors = require('cors')
var app = express();
app.use(cors())

 
var http = require("http").createServer(app);
var io = require("socket.io")(http);
    http.listen(8080, function () {
    console.log("Server connected");
 
    io.on("connection", function (socket) {
        console.log("Auth " + socket.id);
 
        socket.on("sendNotification", function (details) {
            socket.broadcast.emit("sendNotification", details);
        });
    });
});
