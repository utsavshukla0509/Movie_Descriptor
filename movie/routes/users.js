const express = require("express");
const router = express.Router();
// const checkAuth = require("../middleware/checkAuth");
const {SignIn} = require("../controller/user/signIn");
const {SignUp} = require("../controller/user/signUp");
const {DeleteUser} = require("../controller/user/deleteUser");
const {UpdateUser} = require("../controller/user/updateUser");



const signIn = new SignIn();
const signUp = new SignUp();
const deleteUser = new DeleteUser();
const updateUser = new UpdateUser();



//Handling all the incoming requests
router.post("/signup",(req,res) => {
    signUp.handleRequest(req,res);
});
router.post("/login",(req,res) => {
    signIn.handleRequest(req,res);
});
router.patch("/:userID",(req,res) => {
    updateUser.handleRequest(req,res);
});
router.delete("/:userID",(req,res) => {
    deleteUser.handleRequest(req,res);
});
module.exports = router;

