var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')

// set up instance of express
var app = express();

// set port for local and Heroku environments
var  PORT = process.env.PORT || 3030;

// Configure Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname,'index.html'))
});

app.listen(PORT, function() {
  console.log(`Server is running on Port ${PORT}`);
})