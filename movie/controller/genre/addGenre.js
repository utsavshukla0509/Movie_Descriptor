const mongoose = require("mongoose");
const Genre = require("../../models/genre");
const Helper = require('../../utilities/helper');

const helper = new Helper();


class AddGenre{
    handleRequest(req, res) {
    const genre = new Genre({
      _id: mongoose.Types.ObjectId(),
      genre: req.body.genre,
    });
  
      genre
      .save()
      .then(() =>
        helper.writeResponse(null,{message: "Genre added successfuly to MongoDB"}, res)
      )
      .catch((error) =>
        helper.writeResponse({msg :"Something went wrong when adding to MongoDB"},null, res)
      );
    }
  };

module.exports = {AddGenre : AddGenre};