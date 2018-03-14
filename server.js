var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');
var path = require('path');

var port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/favorites', function(req, res){
  var data = fs.readFileSync('./data.json');
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
});

app.post('/favorites', function(req, res){
  console.log("Trying to post to favorites")
  console.log(req.body);
  if(!req.body.name || !req.body.oid){
    res.send("Error");
    return
  }
  else {
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(req.body);
  fs.writeFile('./data.json', JSON.stringify(data));
  res.setHeader('Content-Type', 'application/json');
  res.send(data);
}});

app.listen(port, function(){
  console.log("Listening on port " + port);
});
