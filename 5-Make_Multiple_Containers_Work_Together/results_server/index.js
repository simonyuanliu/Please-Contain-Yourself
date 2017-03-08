var express = require('express');
var mongoose = require('mongoose');
var entry = require('./db_handlers/entry.js');


var app = express();

mongoose.connect('mongodb://localhost:27017/docker_test');
// 172.17.0.2/16
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/views'));

app.get('/', (req, res) => {
  entry.find({}, function(err, entries) {
    if (err) {
      res.render('error');
    }
    console.log(entries);
    res.render('display', {data: entries});
  });
  
});

console.log('listening on port 3000...\n');
app.listen(3000);