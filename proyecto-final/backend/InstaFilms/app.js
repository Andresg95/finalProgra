'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
const db = require('./config/database');


var config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) { throw err; }
  
  // install middleware
  swaggerExpress.register(app);
  
  var port = process.env.PORT || 10010;
  app.listen(port);
  
  console.log(`backend started in port ${port}`);
  
  db
    .authenticate()
    .then(() => console.log("database connected"))
    .catch(err => console.log("error"+err));

});

module.exports = app; // for testing