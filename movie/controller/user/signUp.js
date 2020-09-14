const User = require("../../models/user");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();


class SignUp{
    handleRequest(req, res){
        const {username, email, password} = req.body;
        User.findOne({ email }) //Checking if the email exist
            .then((user) => {
            if (user)
                res.status(409).json({ error: "The entered Email already exist!" });
            else {
                //Hashing the password
                bcrypt.hash(password, 10, (error, hash) => {
                if (error) res.status(500).json({ error });
                else {
                    const userData = new User({
                    _id: mongoose.Types.ObjectId(),
                    name: username,
                    email: email,
                    password: hash,
                    favouriteMovies: [],
                    });
                    userData
                    .save()
                    .then(() => {
                        // create reusable transporter object using the default SMTP transport
                        let transporter = nodemailer.createTransport({
                        host: process.env.EMAIL,
                        port: 587,
                        secure: false,
                        service: "gmail",
                        auth: {
                            user: process.env.EMAIL, // generated ethereal user
                            pass: process.env.PASSWORD // generated ethereal password
                        },
                
                        });

                        //Before sending a mail given link option will be TRUE 
                        //of those gmail account by which you send a message
                        //"https://myaccount.google.com/lesssecureapps?pli=1"

                        transporter
                        .sendMail({
                            from: "Movie Descriptor",
                            to: `${email}`,
                            subject: "Welcome to Movie",
                            text: `Hello Dear ${email}`,
                            html: `<b>Hello Dear User, we are happy that you join our family. Kind Regards, Movie Team.</b>`,
                        })
                        .then((info) => console.log("Email has been sent!",info))
                        .catch((err) => console.log(err));
                        res.status(201).json({
                        message: "The user has been signed up successfully!",
                        userData,
                        favouriteMovies: [],
                        });
                    })
                    .catch((error) => res.status(500).json({ error }));
                }
                });
            }
            });
    }
};

module.exports = {SignUp : SignUp};