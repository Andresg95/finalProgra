const transactionService = require("../service/transaction.service");
const logger = require("../../config/customlogger");
const name = ["TRANSACTION.CONTROLLER"];

const AddTransaction = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    const data = await transactionService.AddTransaction(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in", name, ": ", AddTransaction.name);
  }
};

const getTransaction = async (req, res) => {
  try {
    const params = {
      id_movie: req.swagger.params.id_movie.value,
      id_user: req.swagger.params.id_user.value
    };

    const data = await transactionService.getTransaction(params);
  
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in", name, ": ", getTransaction.name);
  }
};

const updateTransaction = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    params.id_movie = req.swagger.params.id_movie.value;
    params.id_user = req.swagger.params.id_user.value;

    const data = await transactionService.updateTransaction(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in", name, ": ", updateTransaction.name);
  }
};

const deleteTransaction = async (req, res) => {
  try {
    let params = {
      id_movie : req.swagger.params.id_movie.value,
      id_user : req.swagger.params.id_user.value
    }
    
    let data = await transactionService.deleteTransaction(params);
    res.status(200).send(data);
  } catch (error) {
        
    logger.error(error);
    res.status(500).send("error in", name, ": ", updateTransaction.name);
  }
};

module.exports = {
  AddTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction
};
