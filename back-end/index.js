// var http = require("http");

// var server = http.createServer(function (req, res) {
//     res.statusCode = 205;
//     res.end("<h1>Welcome</h1>");
// });

// server.listen(3000, function () {
//     console.log("Đang mở máy chủ: http://localhost:3000");
// })

var express = require("express");

var app = express();

// routes
app.get("/hello", function (req, res) {
    console.log(req.query);
    var name = req.query.name;
    res.send("Hello, " + name);
});
app.post("/login", function (req, res) {
    res.send("Login!");
});
app.post("/register", function (req, res) {
    res.send("Register!");
});
// open server
app.listen(3000, function () {
    console.log("Server is connected");
});
