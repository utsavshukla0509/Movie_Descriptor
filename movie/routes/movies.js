const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const { GetAllMovies } = require("../controller/movie/getAllMovies");
const { AddMovie } = require("../controller/movie/addMovie");


const getAllMovies = new GetAllMovies();
const addMovie = new AddMovie();


router.get("/", (req,res) => {
    getAllMovies.handleRequest(req,res);
});


router.post("/addmovie", (req,res) => {
    addMovie.handleRequest(req,res);
});



module.exports = router;

