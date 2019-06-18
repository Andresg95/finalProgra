'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.removeColumn("transanction", "favorite").then(()=>{

        queryInterface.addColumn("transanction", "favorite",{
          type: Sequelize.BOOLEAN,
        })
      })
  },
  down: (queryInterface, Sequelize) => {
   
    return queryInterface.removeColumn("transanction", "favorite").then(()=>{

      queryInterface.addColumn("transanction", "favorite",{
        type: Sequelize.TINYIINT,
      })
    })
  }
};
