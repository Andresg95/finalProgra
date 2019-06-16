
module.exports = (sequelize, DataTypes) =>{
    const Review = sequelize.define(
      "review",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          field: "ID"
        },
        id_user: {
          type: DataTypes.INTEGER,
          field: "ID_Users"
        },
        id_movie: {
          type: DataTypes.STRING,  
          field: "ID_Movies"
        },
        rate: {
          type: DataTypes.STRING,
          field: "Rate"
        },
        popcorns: {
          type: DataTypes.INTEGER,
          field: "popcorns"
        }
      },
      {
        timestamps: false,
        tableName: "reviews"
      }
    );
    return Review;
    }
    