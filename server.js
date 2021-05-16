//import custom env variables
require('dotenv').config({path: __dirname + '/.env'})
//import express library
const express = require('express');
//import environment helper
const { env } = require('process');
//import path
const path = require('path');
//setup app
const app = express();
//setup port number
const port = process.env.PORT || 3000;
//sets up the Express app to handle incoming data payload
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//make local directories accessible publicly
app.use(express.static(__dirname));
//import routes
const routes = require("./routes");
//connect routes to app
app.use("/apis",routes);
//render home page
app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
//render notes page
app.get('/notes',function(req,res)
{
    res.sendFile(path.join(__dirname+'/public/notes.html'));
});
//setup port to listen on
app.listen(port, () => console.log(`App listening on PORT ${port}`));