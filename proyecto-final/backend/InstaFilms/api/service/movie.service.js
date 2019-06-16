//import db and model
const models = require("../models");
const movie = models.movie;
const logger = require("../../config/customlogger");
const _ = require("lodash");
const sequelize = require('sequelize');

//sequelize operators
const Op = sequelize.Op;


const movieExists = async imdbid => {
  const result = await movie.findOne({
    where: {
      imdbid
    }
  });
  return _.isNull(await result) ? false : true;
};


const getMovieById = async IDimdb => {
  return await movie.findByPk(IDimdb);
  
};

const addMovie = async newmovie => {
  //initial value for movie availability
  newmovie.status = 1;

  return movie
    .create(newmovie)
    .then(res => {
      logger.info("insertion created correctly", res.DataValues);
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

  return movie
    .findByPk(imdbid)
    .then(fetchedmovie => {
      if (fetchedmovie) {
         return fetchedmovie.update(update);
        
      }
    })
    .catch(e => {
      logger.error("error fetching movie", e);
      throw e;
    });

};

const getMovieLanding = async fetchGenre => {

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

const getMoviesByTitle = async title => {
  
  //we fetch all results of movie where title is contained.
  return movie.findAll({
      where: {
        title: {
          [Op.substring] : title
        }
      }
  }).then(results=>{
    let aux = []
    results.forEach(movie=>{
      let data={
        imdbid: movie.imdbid,
        title: movie.title
      };
      aux.push(data)
    })
    return aux;
  }).catch(e=>{
    logger.error(e);
    throw e;
  });
};

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
  getMovieLanding,
  getMoviesByTitle,
  movieExists
};
