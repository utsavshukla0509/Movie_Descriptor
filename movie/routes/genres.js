const express = require("express");
const router = express.Router();
const {AddGenre} = require("../controller/genre/addGenre");
const {GetAllGenres} = require("../controller/genre/getAllGenre");
//Handling all the incoming requests


const getAllGenres = new GetAllGenres();
const addGenre = new AddGenre();

router.get("/", (req,res) => {
    getAllGenres.handleRequest(req,res);
});

router.post("/addgenre", (req,res) => {
    addGenre.handleRequest(req,res);
});


module.exports = router;

