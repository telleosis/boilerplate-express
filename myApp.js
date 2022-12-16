let express = require("express");
let app = express();
require("dotenv").config();

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

app.get("/:word/echo", (req, res) => {
  const word = req.params.word;
  res.send({ echo: word });
});

app.get("/name", (req, res) => {
  let firstName = req.query.first;
  let lastName = req.query.last;

  res.json({ name: `${firstName} ${lastName}` });
});

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

/**
 * Use a .env variable
 * Must install "dotenv": "^16.0.1", in package.json
 * Must import require("dotenv").config();
 */
// app.get("/json", (req, res) => {
//   if (process.env.MESSAGE_STYLE === "uppercase") {
//     return res.json({ "message": "HELLO JSON" });
//   } else {
//     return res.json({ "message": "Hello json" });
//   }
// });

/**
 * Implementing a Root-Level Request Logger Middleware
 * The Middleware must be placed before the HTTP verbs, or
 * HTTP functions
 */
// app.use("/", (req, res, next) => {
//     console.log(req.method + " " + req.path + " " + "-" + " ", req.ip);
//     next();
//   });

//     //Logs  GET / -  105.112.226.145

//   app.use("/public", (req, res, next) => {
//    console.log(req.method + " " + req.path + " " + "-" + " ", req.ip);
//     next();
//   });

//   //Logs    GET /public/style.css -  105.112.226.145

//   app.use("/json", (req, res, next) => {
//     console.log(req.method + " " + req.path + " " + "-" + " ", req.ip);
//     next();
//   });

//   //Logs     GET /style.css -  105.112.226.145

/**
 * Chain Middleware to Create a Time Server
 * ES6 Code version
 */
// app.get('/now', (req, res, next) => {
//     req.time = new Date().toString();  // Hypothetical synchronous operation
//     next();
//   }, (req, res) => {
//     res.json({time: req.time});
//   });

/**
 * Get Route Parameter Input from the Client
 */
//  app.get('/:word/echo', (req, res) => {
//     const word = req.params.word;
//     res.send({echo: word});
// });

module.exports = app;
