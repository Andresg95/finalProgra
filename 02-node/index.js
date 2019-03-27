//This is the fix for practice #2. (and also implemnt rest philosophy)
"use-strict";

const { selfDescription } = require("./constants");

const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3002;
let myDB = [];
let myType, myRandom;
const altruistic = ["altruistic"];
const selfish = ["selfish"];

const urlencoder = bodyParser.urlencoded({ extended: false });
const bodyparserJson = bodyParser.json();

app.use(urlencoder);
app.use(bodyparserJson);

app.get("/", (req, res) => {
  res.status(200).send(selfDescription);
});

app.post("/interact", (req, res) => {
  interactLogic(req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => res.status(400).json(err));
});

app.listen(port);





//local helper function
const buildResponse = (id, type, date, points) => {
  let jsonRes = { id, whatImI: type.toString(), date, points };
  myDB.push(jsonRes);
  return jsonRes;
};

const interactLogic = async params => {
  const { actorId, behavior } = params;
  const timestamp = params.timestamp || new Date().toISOString();
  let points = 0;


  if (behavior !== "selfish" && behavior !== "altruistic") {
    console.log("type not found");
    return "Type not found";
  }
  myRandom = Math.round(Math.random());
  myType = myRandom == 0 ? selfish : altruistic;
  console.log("im ", myType);

  console.log(myType == altruistic);

  if (myType == altruistic) {
    if (behavior != altruistic) {
      points++;
    } else {
      points += 2;
    }
  } else {
    if (behavior == altruistic) {
      points++;
    }
  }


  return await buildResponse(actorId, myType, timestamp, points);
};
