var jsreport = require('jsreport-core')({}),
    fs = require("fs"),
    http = require('http'),
    express = require('express'),
    app = express(),
    path = require('path'),
    router = express.Router();

var http = require('http').Server(app);

//Diretorio root do projeto
app.use(express.static(path.join(__dirname, './www')));

app.get('/', function(req, res){  
  res.sendFile(__dirname + '/www/index.html');
});

app.get('/execute-pdf', function(req, res) {
    console.log("TESTE");
    res.json({message: "OK"});
});

var port = process.env.PORT || 8082;
//var port = process.env.PORT || 3000;

http.listen(port, function() {
    console.log('Running version H104M106. The magic happens on port ' + port);
});