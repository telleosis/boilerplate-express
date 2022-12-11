require("dotenv").config();
let express = require("express");
let app = express();

app.get("/json", (req, res) => {
  const simpleJSONObj = { message: "Hello json".toUpperCase() };

  if (process.env.MESSAGE_STYLE === simpleJSONObj) {
    simpleJSONObj = "Hello Json".toUpperCase();
  } else {
    return simpleJSONObj;
  }
  res.json(simpleJSONObj);
});

app.use("/public", express.static(__dirname + "/public"));

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
