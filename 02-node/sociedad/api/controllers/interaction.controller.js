"use-strict";
const service = require("../service/interactions.service");

const getInteract = async (req, res) => {
  const params = {
    id: req.swagger.params.uuid.value,
    type: req.swagger.params.type.value,
    date: req.swagger.params.date.value || new Date().toLocaleDateString()
  };

  const result = await service.interactLogic(params);

  if (result != undefined) {
    res.status(200).json(result);
  }
};

module.exports = {
  getInteract
};
