//import db and model
const db = require("../../config/database");
const movie = require("../models/movie");
const logger = require("../../config/customlogger");
const _ = require("lodash");
const sequelize = require('sequelize');


const getMovieById = async IDimdb => {
  const mymovie = await movie.findByPk(IDimdb);
  return mymovie;
};

const addMovie = async newmovie => {
  return movie
    .create(newmovie)
    .then(res => {
      logger.info("insertion created correctly", res);
      return res;
    })
    .catch(e => {
      logger.error("unable to insert ", e);
      throw e;
    });
};

const updateMovie = async data => {
  const imdbid = data.id;
  const update = fieldstoupdate(data);

  movie
    .findByPk(imdbid)
    .then(fetchedmovie => {
      if (fetchedmovie) {
        fetchedmovie.update(update);
      }
    })
    .catch(e => {
      logger.error("error fetching movie", e);
    });
};

const getMovieLanding = async (fetchGenre) => {

  const Op = sequelize.Op;

  let results;
  if(_.isUndefined(fetchGenre)){
    results = movie.findAll({
         where: {
             status: 1
         }
     }).then(movies=>{
         let aux = []
         movies.forEach(movie => {
             let data = {
                 imdbid : movie.imdbid,
                 poster: movie.poster
             }
             aux.push(data);
         });
         return aux;
     });
  }else{
    results = movie.findAll({
      where: {
          status: 1,
          genre: {
            [Op.substring] : fetchGenre
          }
      }
  }).then(movies=>{
      let aux = []
      movies.forEach(movie => {
          let data = {
              imdbid : movie.imdbid,
              poster: movie.poster
          }
          aux.push(data);
      });
      return aux;
  });
  }

  return results; 
}



//local-functions
//fieldstoupdate:
const fieldstoupdate= (fields)=>{   
    return {
       ...(fields.imdbid && {imdbid: fields.imdbid}),
       ...(fields.title && {title: fields.title}),
       ...(fields.year && {year: fields.year}),
       ...(fields.runtime && {runtime: fields.runtime}),
       ...(fields.genre && {genre: fields.genre}),
       ...(fields.director && {director: fields.director}),
       ...(fields.writer && {writer: fields.writer}),
       ...(fields.actors && {actors: fields.actors}),
       ...(fields.plot && {plot: fields.plot}),
       ...(fields.poster && {poster: fields.poster}),
       ...(fields.status && {status: fields.status})
    }
}

module.exports = {
  getMovieById,
  addMovie,
  updateMovie,
  getMovieLanding
};
