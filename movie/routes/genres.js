const express = require("express");
const router = express.Router();
const genreController = require("../controller/genre");

//Handling all the incoming requests
router.get("/", genreController.GET_ALL_GENRES);
router.post("/addgenre",genreController.ADD_GENRE);

module.exports = router;
