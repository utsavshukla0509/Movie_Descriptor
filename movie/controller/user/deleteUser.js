const User = require("../../models/user");
const mongoose = require("mongoose");
const Helper = require('../../utilities/helper');

const helper = new Helper();



class DeleteUser{
    handleRequest(req, res){
        console.log('it is here');
        User.deleteOne({ _id: req.params.userID })
        .then((result) => {
            if (result.deletedCount > 0)
                helper.writeResponse(null,{message: "User has been deleted"}, res);
            else {
                helper.writeResponse({code: 400, msg : 'invalid request'}, null, res);
            }
        })
        .catch((error) => this.writeResponse({code: 500,msg : error} ,null, res));
    }
};
module.exports = {DeleteUser : DeleteUser};