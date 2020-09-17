const mongoose = require("mongoose");
const Movie = require("../../models/movie");
const multer = require("multer");
const fs = require("fs");
const Helper = require('../../utilities/helper');

const helper = new Helper();


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./uploads/");
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage: storage }).single("image");
  
 class AddMovie{
    handleRequest(req, res) {
        // console.log(req);
        upload(req, res, (err) => {
        if (err) this.writeResponse({code: 500,msg : err} ,null, res);
        else {
            fs.readFile(req.file.path, function (err, data) {
            if (err) throw err; 
            else {
                const contentType = req.file.mimetype;
                const newMovie = new Movie({
                _id: mongoose.Types.ObjectId(),
                title: req.body.title,
                numberInStock: req.body.numberInStock,
                genre: req.body.genre,
                image: { data, contentType },
                rate: req.body.rate,
                description:req.body.description,
                trailerLink:req.body.trailerLink,
                movieLength:req.body.movieLength
                });
    
                //Saving new movie in db
                newMovie.save((err, movie) => {
                if (err) this.writeResponse({code: 500,msg : err} ,null, res);
                else {
                  helper.writeResponse(null,{
                    message: "A new movie added.",
                    movie: movie,
                  }, res);
                }
                });
            }
            });
        }
        });
    }
  };
  
  module.exports = {AddMovie : AddMovie};