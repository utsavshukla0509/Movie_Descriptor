const mongoose = require("mongoose");
const Genre = require("../../models/genre");

class GetAllGenres {
    handleRequest(req,res){
        Genre.find()
        .then((docs) => {
            return res.status(200).json(docs);
        })
        .catch((err) => res.status(500).json(err));
    }
};

module.exports = {GetAllGenres : GetAllGenres};