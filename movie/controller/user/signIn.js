const User = require("../../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();
const Helper = require('../../utilities/helper');
const helper = new Helper();


class SignIn{
    handleRequest(req, res, next){
        const { password, email } = req.body;
        User.find({ email: email }, (err, user) => {
            if (err || user.length === 0)
                helper.writeResponse({code: 400, msg : 'No user was found with this email.'},null, res);
            else if (user.length > 0) {
            //Comparing password
            bcrypt.compare(password, user[0].password, (_err, result) => {
                if (_err) helper.writeResponse({code: 400, msg : 'Authentication has failed!'},null, res);
                else if (result) {
                const userData = {
                    name: user[0].name,
                    email: user[0].email,
                    ID: user[0]._id,
                    favouriteMovies: user[0].favouriteMovies,
                };
                const token = jwt.sign(userData, "MONGO_SECRET", { expiresIn: "1h" });

                helper.writeResponse(null,{
                    message: "Authentication has been successful",
                    token: token,
                    userData,
                }, res);

                } else
                helper.writeResponse({code: 400, msg : 'The password entered is incorrect!'},null, res);
            });
            }
        }).catch((error) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
};

module.exports = {SignIn : SignIn};