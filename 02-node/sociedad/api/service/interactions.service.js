"use-strict";

let myDB = [];
let points = 0,
  myType,
  myRandom;
const altruistic = ["altruistic"];
const selfish = ["selfish"];

const buildResponse = (id, type, date) => {
  
    let jsonRes = { id, whatImI: type.toString(), date };
    myDB.push(jsonRes);
  return jsonRes;

};

const interactLogic = params => {


  const { id, type, date } = params;

  //generate random type
  return new Promise((resolve,rejected) => {
    if(type!== "selfish" && type!== "altruistic" ){
      rejected("Type not found");
    }
    myRandom = Math.round(Math.random());
    myType = myRandom == 0 ? selfish : altruistic;
    console.log("im ", myType);


    if (myType == altruistic) {
      if (type != altruistic) {
        points++;
      } else {
        points += 2;
      }
    } else {
      if (type == altruistic) {
        points++;
      }
    }

    console.log("points this round", points);
    resolve(buildResponse(id, myType, date));
  });
};

module.exports = {
  interactLogic
};
