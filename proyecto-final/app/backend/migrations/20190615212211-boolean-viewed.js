'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.removeColumn("transanction", "viewed").then(()=>{

        queryInterface.addColumn("transanction", "viewed",{
          type: Sequelize.BOOLEAN,
        })
      })
  },
  down: (queryInterface, Sequelize) => {
   
    return queryInterface.removeColumn("transanction", "viewed").then(()=>{

      queryInterface.addColumn("transanction", "viewed",{
        type: Sequelize.TINYIINT,
      })
    })
  }
};
