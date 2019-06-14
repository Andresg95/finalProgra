const sequelize = require("sequelize");
const db = require("../../config/database");

const User = db.define(
  "user",
  {
    id: {
      type: sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      field: "ID"
    },
    username: {
      type: sequelize.STRING,
      field: "userName"
    },
    email: {
      type: sequelize.STRING,
      field: "email"
    },
    password: {
      type: sequelize.STRING,
      field: "password"
    },
    popcorns_global: {
      type: sequelize.INTEGER,
      field: "popcornsGlobal"
    },
    is_admin: {
      type: sequelize.BOOLEAN,
      field: "isAdmin"
    },
    silenced: {
        field: "Silenced"
    },
    profile_path:{
        type: sequelize.STRING,
        field: "profile_path"

    }
  },
  {
    timestamps: false,
    tableName: "users"
  }
);

module.exports = User;
