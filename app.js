var express = require('express');
var db = require('./config');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  db.User.find({}, function(err, users) {
    if(err) {
      console.log(err);
      res.status(404).end();
    } else {
      console.log('yo');
      res.status(200).send(users)
    }
  });
});

app.post('/', function(req, res) {
  console.log('username: ' + req.body.username);
  var newUser = new db.User({
  	username: req.body.username	
  });

  newUser.save(function(err) {
  	if (err) {
  	  res.status(404).end();
  	}
  	console.log('User created!');
  	res.status(302).end();
  });
});

app.listen(3000, function(){
  console.log('Listening at port 3000');
});