const mongoose = require("mongoose");
const Movie = require("../../models/movie");


class GetAllMovies{
    handleRequest(req, res) {
    Movie.find()
      .then((movies) =>
        res.status(200).json({
          count: movies.length,
          movies: movies,
        })
      )
      .catch((err) => res.status(500).json({ error: err }));
    }
  };

module.exports = {GetAllMovies : GetAllMovies};