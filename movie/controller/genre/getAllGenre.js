const mongoose = require("mongoose");
const Genre = require("../../models/genre");

class GetAllGenres {
    handleRequest(req,res){
        Genre.find()
        .then((docs) => {
            return helper.writeResponse(null,{message: docs}, res)
        })
        .catch((err) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
};

module.exports = {GetAllGenres : GetAllGenres};