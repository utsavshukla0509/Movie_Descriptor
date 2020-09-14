const User = require("../../models/user");
const mongoose = require("mongoose");

class DeleteUser{
    handleRequest(req, res){
        console.log('it is here');
        User.deleteOne({ _id: req.params.userID })
        .then((result) => {
            if (result.deletedCount > 0)
                this.writeResponse(null,{message: "User has been deleted"}, res);
            else {
                this.writeResponse({code: 400, msg : 'invalid request'}, null, res);
            }
        })
        .catch((error) => this.writeResponse({code: 500} ,null, res));
    }

    writeResponse(err, data, res) {
        if(err) {
            err.code = err.code || 500;
            console.log('req has been sent with status: ', err.code);
            return res.status(err.code).json({message: err.msg || 'internal server error'});
        } else{
            res.status = 200;
            res.json(data);
            return res;
        }
    }
};
module.exports = {DeleteUser : DeleteUser};