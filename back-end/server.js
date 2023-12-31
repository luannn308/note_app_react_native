const express = require("express");
const path = require("path");
const app = express();
const { connectDB } = require("./Database");

connectDB();

const server = app.listen(process.env.PORT, 62701);
const portNumber = server.address().port;

console.log(`Server is listening on port ${portNumber}`);
