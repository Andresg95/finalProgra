const followerService = require("../service/follower.service");
const logger = require("../../config/customlogger");

const name = ["FOLLOWER.CONTROLLER"];

const addFollowing = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    const data = await followerService.addFollowing(params);
    res.status(201).send(data);
  } catch (error) {
      logger.error(error)
      res.send(`error in ${name} : ${addFollowing.name}`);

  }
};

const deleteFollow = async (req, res) => {

    try {
        const params = {
            user: req.swagger.params.user.value,
            follows: req.swagger.params.follows.value
        }

       
        console.log("myparams", params);
        
        const data = await followerService.deleteFollow(params);
        res.status(200).send(data);
    } catch (error) {
        //logger.error(error);    
        console.log("what sgoing on", error)
        res.send(`error in ${name} : ${deleteFollow.name}`);
    }

};

module.exports = {
  addFollowing,
  deleteFollow
};
