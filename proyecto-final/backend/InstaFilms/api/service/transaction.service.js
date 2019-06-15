const { userExists } = require("./user.service");
const { movieExists } = require("./movie.service");

const models = require("../models");
const Transaction = models.transaction;
const logger = require("../../config/customlogger");
const _ = require('lodash');
const sequelize = require("sequelize");

//sequelize operators
const Op = sequelize.Op;

const transactionExists = async (fields) => {
           
        const {id_movie, id_user } = fields;

        const TtoCheck = await Transaction.findOne({
            where: {
                id_movie,
                id_user
            }
        });

        return _.isNull(await TtoCheck) ? false : true;
 
};

const AddTransaction = async newUserMovieTransaction => {

  //check movie id is valid.
  //check user exists.

  const { id_user, id_movie} = newUserMovieTransaction;

  const checkUserExists = await userExists(id_user);
  const checkMovieExists = await movieExists(id_movie);

  
 const existant = await transactionExists(newUserMovieTransaction);

  if (checkUserExists && checkMovieExists) {

        if(!existant){
            try{
               
              return await Transaction.create({
                id_user,
                id_movie,
                standby: newUserMovieTransaction.standby,
                viewed: newUserMovieTransaction.viewed,
                favorite: newUserMovieTransaction.favorite
              });
            } catch (error) {
                logger.error(error);
                throw error;
            }
        }else{
            return {
                error: "transaction already exists"
            }
        }
  } else {
    let failedResponse = {
      error: "failed to create transaction",
      checkUserExists,
      checkMovieExists
    };

    return failedResponse;
  }
};

const getTransaction = async params => {

    const { id_movie, id_user} = params;
    return await Transaction.findOne({
        where: {
            id_movie,
            id_user
        }
    })
};

const updateTransaction = async params => {

    const {id_movie, id_user} = params;
    const update = fieldsToUpdate(params);

    console.log(params);
    console.log(update);

    Transaction.findOne({
        where: {
            id_movie,
            id_user
        }
    }).then(fetchedTransaction=>{
        console.log("inside promise", fetchedTransaction.dataValues);
        if(fetchedTransaction){
            fetchedTransaction.update(update);
        }
    }).catch(e=>{
        logger.error("error fetching transaction", e);
        throw e;
    })

    return `Updated transaction for user ${id_user}`;

};

const deleteTransaction = async deletion => {
    const {id_movie, id_user} = deletion;
    if(await transactionExists(deletion)){
          await Transaction.destroy({
            where:{
                id_movie,
                id_user
            }
        })

        return `Transaction for user ${id_user} and movie ${id_movie} deleted succesfully`

    }else{
        return {
            error: "transaction not found"
        };
    }

};

//localfunction
const fieldsToUpdate = fields => {
  return {
    ...(fields.standBy && { standby: fields.standBy }),
    ...(fields.viewed && { viewed: fields.viewed }),
    ...(fields.favorite && { favorite: fields.favorite })
  };
};

module.exports = {
  AddTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction
};
