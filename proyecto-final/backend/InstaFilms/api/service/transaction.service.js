const { userExists } = require('./user.service');
const { movieExists }  = require('./movie.service');


const AddTransaction = async (params) => {

}

const getTransaction = async (params) => {

}

const updateTransaction = async (params) => {

}

const deleteTransaction = async (params) => {

}

//localfunction
const fieldsToUpdate =(fields)=>{

    return {
        ...(fields.standby && {standby: fields.standby}),
        ...(fields.viewed && {viewed: fields.viewed}),
        ...(fields.favorite && {favorite: fields.favorite})
    }
}

module.exports = {
    AddTransaction,
    getTransaction,
    updateTransaction,
    deleteTransaction
}