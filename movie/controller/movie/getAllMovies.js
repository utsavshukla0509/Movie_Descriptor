const mongoose = require("mongoose");
const Movie = require("../../models/movie");
const Helper = require('../../utilities/helper');

const helper = new Helper();


class GetAllMovies{
    handleRequest(req, res) {
    Movie.find()
      .then((movies) =>
        helper.writeResponse(null,{
          count: movies.length,
            movies: movies,
        }, res)
      )
      .catch((err) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
  };

module.exports = {GetAllMovies : GetAllMovies};