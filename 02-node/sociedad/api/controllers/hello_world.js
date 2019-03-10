"use strict";

var util = require("util");
const service = require("../service/interactions.service");

module.exports = {
  hello: hello
};

function hello(req, res) {
//   const params = {
//     id: req.swagger.params.uuid.value,
//     type: req.swagger.params.AorS.value,
//     date: req.swagger.params.date.value || new Date().toLocaleDateString()
//   };

//   const result = service.interactLogic(params);



  // this sends back a JSON response which is a single string
  res.json(result);
}
