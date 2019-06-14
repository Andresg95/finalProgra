const sequelize = require("sequelize");
const db = require("../../config/database");

const Transaction = db.define(
  "transaction",
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "ID"
    },
    id_movie: {
      type: sequelize.STRING,
      field: "ID_Movies"
    },
    id_user: {
      type: sequelize.INTEGER,
      field: "ID_Users"
    },
    standby: {
      type: sequelize.BOOLEAN,
      field: "standBy"
    },
    viewed: {
      type: sequelize.BOOLEAN,
      field: "viewed"
    },
    favorite: {
      type: sequelize.BOOLEAN,
      field: "favorite"
    }
  },
  {
    timestamps: false,
    tableName: "transanction"
  }
);

module.exports = Transaction;
