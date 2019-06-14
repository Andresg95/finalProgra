//database connection
const Sequelize = require("sequelize");

//local configuration to set up for remote instance.
const sequelize = new Sequelize("instafilms", "root", "", {
  host: "localhost",
  dialect: "mysql",
  timestamps: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
  module.exports = sequelize;