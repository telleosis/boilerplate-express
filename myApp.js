let express = require("express");
let app = express();
require("dotenv").config();

const mySecret = process.env.MESSAGE_STYLE;

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({ message: "HELLO JSON" });
  } else {
    return res.json({ message: "Hello json" });
  }
});

module.exports = app;

/** 
 * Send back a string
 * /
// app.get("/", (req, res) => {
//     res.send("Hello Express"); //Serves a string
//   });

/**
 * Send back a file
 * /
//   app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/views/index.html"); //Serve a file
//   });

/**
 * Send back a JSON
 */
// app.get("/json", (req, res) => {
//   const simpleJSONObj = { message: "Hello json" };
//   res.json(simpleJSONObj);
// });
