//imports
const express = require("express");
const server = express();
const path = require("path");
const bodyParser = require("body-parser");

//Middle ware setups
server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(express.static(path.join(__dirname, "public")));

//Import routes
const createPostRoute = require("./routes/create-post");
const postRoute = require("./routes/posts");
const homeRoute = require("./routes/home");
const detailRoute = require("./routes/detail");

//View Engine setup
server.set("views", path.join(__dirname, "views"));
server.set("view engine", "ejs");

//Error Handling

//Register routes
server.use("/create-post", createPostRoute);
server.use("/", homeRoute);
server.use("/posts", postRoute);
server.use("/", detailRoute);

server.listen(5000, () => {
  console.log("server is running on port 5000");
});