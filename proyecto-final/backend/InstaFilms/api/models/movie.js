module.exports = (sequelize, DataTypes) => {
  const Movie = sequelize.define(
    "movie",
    {
      imdbid: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING
      },
      year: {
        type: DataTypes.STRING
      },
      runtime: {
        type: DataTypes.STRING
      },
      genre: {
        type: DataTypes.STRING
      },
      director: {
        type: DataTypes.STRING
      },
      writer: {
        type: DataTypes.STRING
      },
      actors: {
        type: DataTypes.STRING
      },
      plot: {
        type: DataTypes.STRING
      },
      poster: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.INTEGER
      }
    },
    {
      timestamps: false,
      tableName: "movies"
    }
  );
  return Movie;
};
