const User = require("../../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();

class SignIn{
    handleRequest(req, res, next){
        const { password, email } = req.body;
        User.find({ email: email }, (err, user) => {
            if (err || user.length === 0)
            res.status(404).json({ error: "No user was found with this email." });
            else if (user.length > 0) {
            //Comparing password
            bcrypt.compare(password, user[0].password, (_err, result) => {
                if (_err) res.status(401).json({ error: "Authentication has failed!" });
                else if (result) {
                const userData = {
                    name: user[0].name,
                    email: user[0].email,
                    ID: user[0]._id,
                    favouriteMovies: user[0].favouriteMovies,
                };
                const token = jwt.sign(userData, "MONGO_SECRET", { expiresIn: "1h" });
                res.status(200).json({
                    message: "Authentication has been successful",
                    token: token,
                    userData,
                });
                } else
                res.status(401).json({ error: "The password entered is incorrect!" });
            });
            }
        }).catch((err) => res.status(500).json({ error: err }));
    }
};

module.exports = {SignIn : SignIn};