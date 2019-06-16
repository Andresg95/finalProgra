
module.exports = (sequelize, DataTypes) =>{
const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      field: "ID"
    },
    username: {
      type: DataTypes.STRING,
      field: "userName"
    },
    email: {
      type: DataTypes.STRING,
      field: "email"
    },
    password: {
      type: DataTypes.STRING,
      field: "password"
    },
    popcorns_global: {
      type: DataTypes.INTEGER,
      field: "popcornsGlobal"
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      field: "isAdmin"
    },
    silenced: {
        type: DataTypes.BOOLEAN,
        field: "Silenced"
    },
    profile_path:{
        type: DataTypes.STRING,
        field: "profile_path"

    }
  },
  {
    timestamps: false,
    tableName: "users"
  }
);

User.associate = (models) =>{

  User.hasMany(models.follower, {
    foreignKey: "follows"
  });

  User.hasMany(models.review, {
    foreignKey: "id_user"
  });

  User.hasMany(models.transaction, {
    foreignKey: "id_user"
  })
}





return User;
}
