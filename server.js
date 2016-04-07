/* eslint-disable */
(function(){
  'use strict';
  var express = require('express');
  var app = express();
  var path = require('path');
  var fs = require('fs');
  var http = require('http')
  var server = http.createServer(app);
  var bodyParser = require('body-parser');
  var FE_CHAR = path.join(__dirname, 'FE_CHAR.json');
  var FE_CLASS = path.join(__dirname, 'FE_CLASS.json');

  app.use('/', express.static(path.join(__dirname)));
  app.set('port', (process.env.PORT || 3000));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended:true}));

  app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  app.get('/api/fe-char', function(req, res) {
    fs.readFile(FE_CHAR, function(err, data){
      if(err){
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.get('/api/fe-class', function(req, res) {
    fs.readFile(FE_CLASS, function(err, data){
      if(err){
        console.error(err);
        process.exit(1);
      }
      res.json(JSON.parse(data));
    });
  });

  app.listen(app.get('port'), function() {
    console.log('Server started: http://localhost:' + app.get('port') + '/');
  });
})();
