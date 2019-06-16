const userService = require("../service/user.service");
const logger = require("../../config/customlogger");

const name = ["USER.CONTROLLER"];

const getUserById = async (req, res) => {

    try {
        const id = req.swagger.params.id.value
        const data = await userService.getUserById(id);
        res.status(200).send(data);
        
    } catch (error) {
        logger.error(error);
        res.status(500).send("error in ", name, ": ", getUserById.name);
    }

};

const addUser = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    
    const data = await userService.addUser(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.send("error in", name), ": ", addUser.name;
  }
};

const updateUser = async (req, res) => {
    
    try {
        const params={
            ...req.body
        };
        params.id= req.swagger.params.id.value;
        const data = await userService.updateUser(params);
        
        res.status(200).send(data);
    } catch (error) {
        logger.error(error);
        res.status(500).send("error in ", name, ": ", updateUser.name);
    }

};

module.exports = {
  getUserById,
  addUser,
  updateUser
};
