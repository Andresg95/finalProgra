const sequelize = require("sequelize");

const db = require("../../config/database");

const Movie = db.define("movie", {
  imdbid: {
    type: sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: sequelize.STRING
  },
  year: {
    type: sequelize.STRING
  },
  runtime: {
    type: sequelize.STRING
  },
  genre: {
    type: sequelize.STRING
  },
  director:{
    type: sequelize.STRING
  },
  writer: {
    type: sequelize.STRING
  },
  actors: {
    type: sequelize.STRING 
  },
  plot: {
    type: sequelize.STRING
  },
  poster: {
      type: sequelize.STRING
  },
  status: {
    type: sequelize.INTEGER
  }

},
{
    timestamps: false
});


module.exports = Movie;