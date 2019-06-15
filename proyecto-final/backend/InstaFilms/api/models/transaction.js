
module.exports = (sequelize, DataTypes) => {
const Transaction = sequelize.define(
  "transaction",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      field: "ID"
    },
    id_movie: {
      type: DataTypes.STRING,
      field: "ID_Movies"
    },
    id_user: {
      type: DataTypes.INTEGER,
      field: "ID_Users"
    },
    standby: {
      type: DataTypes.BOOLEAN,
      field: "standBy"
    },
    viewed: {
      type: DataTypes.BOOLEAN,
      field: "viewed"
    },
    favorite: {
      type: DataTypes.BOOLEAN,
      field: "favorite"
    }
  },
  {
    timestamps: false,
    tableName: "transanction"
  }
);

return Transaction;

}