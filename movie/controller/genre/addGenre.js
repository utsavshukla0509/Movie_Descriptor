const mongoose = require("mongoose");
const Genre = require("../../models/genre");


class AddGenre{
    handleRequest(req, res) {
    const genre = new Genre({
      _id: mongoose.Types.ObjectId(),
      genre: req.body.genre,
    });
  
      genre
      .save()
      .then(() =>
        res.status(201).json({ message: "Genre added successfuly to MongoDB" })
      )
      .catch((error) =>
        res.status(500).json({
          message: "Something went wrong when adding to MongoDB",
          error,
        })
      );
    }
  };

module.exports = {AddGenre : AddGenre};