const cors = require("cors");
// const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const movieRoute = require("./routes/movies");
const genreRoute = require("./routes/genres");
const userRoute = require("./routes/users");


const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
// app.use(express.static("frontend/build"));

const databaseConfig = require("./config/keys");
mongoose.connect(databaseConfig, { useNewUrlParser: true, useCreateIndex: true , useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));
app.use(bodyParser.json({ limit: "10mb" }));

//App routes to handle requests
app.use("/api/movies", movieRoute);
app.use("/api/genres", genreRoute); //cache
app.use("/api/users", userRoute);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});