const transactionService = require('../service/transaction.service');
const logger = require('../../config/customlogger');


const AddTransaction = async (req, res) => {

    const params = {
        ...req.body
    };

    
}

const getTransaction = async (req, res)  => {

}

const updateTransaction = async (req, res)  => {

}

const deleteTransaction = async (req, res)  => {

}

module.exports = {
    AddTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction
}