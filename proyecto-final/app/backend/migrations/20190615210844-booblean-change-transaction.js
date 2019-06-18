'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.removeColumn("transanction", "standBy").then(()=>{

        queryInterface.addColumn("transanction", "standBy",{
          type: Sequelize.BOOLEAN,
        })
      })
  },
  down: (queryInterface, Sequelize) => {
   
    return queryInterface.removeColumn("transanction", "standBy").then(()=>{

      queryInterface.addColumn("transanction", "standBy",{
        type: Sequelize.TINYIINT,
      })
    })
  }
};
