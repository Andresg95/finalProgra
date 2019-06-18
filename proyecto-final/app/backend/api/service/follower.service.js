const { userExists } = require("./user.service");

const models = require("../models");
const follower = models.follower;
const logger = require("../../config/customlogger");
const _ = require("lodash");
const sequelize = require("sequelize");

//sequelize operators
const Op = sequelize.Op;

const FollowingExists = async params => {
  const { user, follows } = params;
  const FollowToCheck = await follower.findOne({
    where: {
      user,
      follows
    }
  });

  return _.isNull(await FollowToCheck) ? false : true;
};

const addFollowing = async params => {
  const { user, follows } = params;

  const checkUser = await userExists(user);
  const checkfollower = await userExists(follows);

  const checkFollowingRecord = await FollowingExists(params);

  if (checkUser && checkfollower) {

    if(!checkFollowingRecord){

        return follower
          .create({
            user,
            follows
          })
          .then(insertion => {
            logger.info("following insertion sucessfully");
            return insertion;
          })
          .catch(e => {
            logger.error("unable to insert", e);
            throw e;
          });
    }else{

        return {
            error: "following record already exists"
        }
    }
  } else {
    let failedResponse = {
      error: "Failed to create following",
      checkUser,
      checkfollower
    };
    return failedResponse;
  }
};

const deleteFollow = async params => {

    const { user, follows } = params;

    if(await FollowingExists(params)){
        await follower.destroy({
            where: {
                user,
                follows
            }
        })
        return `Follow for user ${user} succesfully deleted`;
    }else{
        return{
            error: "follow not found"
        }
    }
};

module.exports = {
  addFollowing,
  deleteFollow
};
