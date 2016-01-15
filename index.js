var express = require('express');
var bodyParser = require('body-parser');

var middleware = require('./controllers/middleware.js');
var mainCtrl = require('./controllers/mainCtrl.js');

var app = express();

app.use(bodyParser.json());
app.use(middleware.addHeaders);

app.get('/name', mainCtrl.getName);
app.get('/location', mainCtrl.getLocation);
app.get('/occupations', mainCtrl.getOccupations);
app.get('/occupations/latest', mainCtrl.getLatestOccupations);
app.get('/hobbies', mainCtrl.getHobbies);
app.get('/hobbies/:type', mainCtrl.getHobbiesType);
//
// app.get('/users/:id', usersCtrl.show);
// app.post('/users', usersCtrl.create);
// app.put('/users', usersCtrl.update);
// app.delete('/users', usersCtrl.destroy);

var port = 3000;
app.listen(port, function(){
  console.log("Listening on port ", port);
});
