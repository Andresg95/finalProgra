const movieService = require('../service/movie.service');

const getMovieById = async (req, res) => {
      
    const params = {
        id: req.swagger.params.id.value
    }
    const data = await movieService.getMovieById(params.id);
    res.status(200).send(data)
}

module.exports = {
    getMovieById
}