const transactionService = require("../service/transaction.service");
const logger = require("../../config/customlogger");
const name = ['TRANSACTION.CONTROLLER'];

const AddTransaction = async (req, res) => {
  
  try {
    const params = {
      ...req.body
    };
    const data = await transactionService.AddTransaction(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in", name), ": ", AddTransaction.name;
  }
};

const getTransaction = async (req, res) => {};

const updateTransaction = async (req, res) => {};

const deleteTransaction = async (req, res) => {};

module.exports = {
  AddTransaction,
  getTransaction,
  updateTransaction,
  deleteTransaction
};
