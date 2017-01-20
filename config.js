var path = require('path');
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
  console.log('OPEN');
});

var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true}
});


var User = mongoose.model('User', userSchema);

module.exports.User = User;