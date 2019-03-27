"use-strict";

let sampleData = {
  actorId: "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  behavior: "altruistic",
  timestamp: "2000-00-00T00:00:00.000+00:00"
};

let selfDescription = [
  {
    endpoint: "localhost:3000/",
    type: "GET",
    id: 1
  },
  {
    endpoint: "localhost:3000/interact",
    type: "GET",
    parameters: {
        actorId:{
            description: "Id of caller",
            type: "string"
        },
        behavior: {
            description: "value of query",
            options: ["altruistic", "selfish"],
            type: "string"
        },
        timeStamp: {
            description: "date of request",
            type: "string",
            format: "date"
        }
    },
    id: 2
  }
];

module.exports = {
    sampleData, selfDescription
}