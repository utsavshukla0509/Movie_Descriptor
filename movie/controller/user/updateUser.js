const User = require("../../models/user");
const mongoose = require("mongoose");



class UpdateUser{
    handleRequest(req,res,next){
  const userID = req.params.userID;

  User.updateMany({ _id: userID }, { $set: req.body })
    .then(
    //   (result) => result.state(200).json({
    //   message:"successfully updated",
    //   result
    // })
    (result)=>{
      res.status(200).json({
      message:"successfully updated",
      result
      })
    }
    )
    .catch((error) => res.status(409).json(error));
    }
};

module.exports = {UpdateUser : UpdateUser};