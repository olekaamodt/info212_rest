var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/addressModels'),
  Task2 = require('./api/models/userModels'), //created model loading here
  bodyParser = require('body-parser');
  cors = require("cors")

var config = require("./config.json")
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect(config.mongoAddress); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())


var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route

app.get("/", (req, res) => {
  res.send("hello world")
})

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);