module.exports = (sequelize, DataTypes) => {
    const Follower = sequelize.define(
      "follower",
      {
        user: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          field: "idUser"
          
        },
        follows: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "IdUserFollowUser"
        }
      },
      {
        timestamps: false,
        tableName: "followers"
      }
    );
    return Follower;
  };
  