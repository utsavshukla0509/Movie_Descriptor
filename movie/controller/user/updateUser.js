const User = require("../../models/user");
const mongoose = require("mongoose");
const Helper = require('../../utilities/helper');
const helper = new Helper();


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
      helper.writeResponse(null,{
        message:"successfully updated",
        result
      }, res);
    }
    )
    .catch((error) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
};

module.exports = {UpdateUser : UpdateUser};