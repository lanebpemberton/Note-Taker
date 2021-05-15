//import express library
const express = require('express');
//import environment helper
const { env } = require('process');
//setup app
const app = express();
//setup port number
const port = process.port || 3000;
//sets up the Express app to handle incoming data payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//make local directories accessible publicly
app.use(express.static(__dirname));
//import routes
const routes = require("./routes");
//connect routes to app
app.use("/apis",routes);
//setup port to listen on
app.listen(port, () => console.log(`App listening on PORT ${port}`));