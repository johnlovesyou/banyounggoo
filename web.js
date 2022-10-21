const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '/server/build')));
app.use(express.urlencoded({extended: true})) 

app.use(express.json());
var cors = require('cors');
app.use(cors());




app.get('/', function(req, res) {
  res.sendFile(__dirname + '/server/build/index.html');
});

app.listen(8001, function(){
  console.log('server is running')
});




app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/server/build/index.html'));
});
app.get('*', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/server/build/index.html'));
});
