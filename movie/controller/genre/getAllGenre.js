const mongoose = require("mongoose");
const Genre = require("../../models/genre");
const Helper = require('../../utilities/helper');

const helper = new Helper();

class GetAllGenres {
    handleRequest(req,res){
        Genre.find()
        .then((docs) => {
            return helper.writeResponse(null,docs, res)
        })
        .catch((error) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
};

module.exports = {GetAllGenres : GetAllGenres};