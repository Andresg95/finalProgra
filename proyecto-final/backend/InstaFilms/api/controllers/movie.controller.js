const movieService = require("../service/movie.service");
const logger = require("../../config/customlogger");

const name = ["MOVIE.CONTROLLER"];

const getMovieById = async (req, res) => {
  const id = req.swagger.params.id.value;

  logger.info("im here whyyy");
  const data = await movieService.getMovieById(id);
  res.status(200).send(data);
  console.log();
};

//manually add a movie
const addMovie = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    const data = await movieService.addMovie(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in movie controller", name);
  }
};
//UPDATE ANY MOVIE fields
const updateMovieById = async (req, res) => {
  try {
    const params = {
      ...req.body
    };
    params.id = req.swagger.params.id.value;
    const data = await movieService.updateMovie(params);
    res.status(200).send(data);
  } catch (error) {
    logger.error(error);
    res.status(500).send("error in", name, ", in ", updateMovieById.name);
  }
};

const getMovieLanding = async (req, res) => {
  try {
    //optional sending genre
    const genre = req.swagger.params.genre.value; 
    const data = await movieService.getMovieLanding(genre);
    res.send(data);
  } catch (error) {
      logger.error(error);
      res.status(500).send("error in", name, ", in ", getMovieLanding.name);
  }
};

const getMovieTitle = async (req, res) => {


    try {
        const title = req.swagger.params.title.value;
        const data = await movieService.getMoviesByTitle(title);
        res.send(data);
    } catch (error) {
        res.status(500).send("error in", name, ", in ", getMoviesByTitle.name);
    }
}

module.exports = {
  getMovieById,
  addMovie,
  updateMovieById,
  getMovieLanding,
  getMovieTitle
};
