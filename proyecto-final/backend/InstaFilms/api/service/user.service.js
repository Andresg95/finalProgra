//import db and model
const User = require("../models/user");
const logger = require("../../config/customlogger");
const _ = require("lodash");
const sequelize = require("sequelize");

//sequelize operators
const Op = sequelize.Op;

const getUserById = async id => {
    const data = await User.findByPk(id);    
    delete data.dataValues.password;
    return data;
};

const addUser = async newUser => {
  try {
      let clearName = await userNameExists(newUser.username);
      let clearEmail = await emailExists(newUser.email)

    if ( !clearName && !clearEmail) {
        
        return User.create({
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
        popcorns_global: newUser.popcorns_global,
        is_admin: newUser.is_admin,
        silenced: newUser.silenced,
        profile_path: newUser.profile_path
      })
        .then(user => {
          logger.info(`user with id ${user.dataValues.id} succesfully created`);
          return {
            id: user.dataValues.id,
            username: user.dataValues.username,
            email: user.dataValues.email
          };
        })
        .catch(e => {
          logger.error(e);
          console.log(e);
          throw e;
        });
    } else {
        let response = {
            msg: "not unique, cannot create",
            "EmailExists": clearEmail,
            "NameExists" : clearName
        }
      return response;
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

const updateUser = async data => {

    const id = data.id
    const update = checknullparams(data);

    //flags to verify unique username and email
    let flag1= false;
    let flag2 = false;

    if (!_.isUndefined(update.username)){
        let clearName = await userNameExists(update.username);
        if(clearName){
            flag1=true
        }
    }


    if(!_.isUndefined(update.email)){
        let clearEmail = await emailExists(update.email);
        if (clearEmail){
            flag2=true;
        }
    }

    //if username or email is repeated, cannot update fields.
    if(!flag1 && !flag2){
        User.findByPk(id).then(fetcheduser=>{
            if(fetcheduser){
                fetcheduser.update(update);
            }
        }).catch(e=>{
            logger.error("error fetching user", e);
            throw e;
        })
        return `updated user with id ${id}`

    }else{
        let response = {
            msg: "not unique, cannot create",
            "NameExists" : flag1,
            "EmailExists": flag2,
        }
        return response;
    }
};




//local function
const checknullparams = fields => {

    return {
        ...(fields.username &&{username: fields.username}),
        ...(fields.email &&{email: fields.email}),
        ...(fields.password &&{password: fields.password}),
        ...(fields.popcorns_global &&{popcorns_global: fields.popcorns_global}),
        ...(fields.is_admin &&{is_admin: fields.is_admin}),
        ...(fields.silenced &&{silenced: fields.silenced}),
        ...(fields.profile_path &&{profile_path: fields.profile_path}),
    }
};

const userNameExists = async name => {
  const result = await User.findOne({
    where: {
      username: name
    }
  });
  return _.isNull(await result) ? false : true;
};

const emailExists = async email => {
  const result = await User.findOne({
    where: {
      email
    }
  });

  return _.isNull(await result) ? false : true;
};


module.exports = {
  getUserById,
  addUser,
  updateUser
};
