var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

var app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.set('public', path.join(__dirname, 'public'));

app.get('/armons/endpoint', function(req, res) {
  res.json({armons: 'json'})
  
});

var port = process.env.PORT || '3000';

app.listen(port, function() {
  console.log('It\'s Alive!!');
});
