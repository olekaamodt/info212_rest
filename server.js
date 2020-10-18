var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/addressModels'), //created model loading here
  bodyParser = require('body-parser');
  cors = require("cors")
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Olek:admin@cluster0.jjq8h.mongodb.net/Info212'); 


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