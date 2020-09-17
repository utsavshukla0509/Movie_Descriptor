class Helper {

    constructor() {

    }

    writeResponse(err, data, res) {
        if(err) {
            err.code = err.code || 500;
            console.log('req has been sent with status:', err.code);
            return res.status(err.code).json({message: err.msg || 'internal server error'});
        } else{
            console.log('req has been sent with status: 200');
            res.status = 200;
            res.json(data);
            return res;
        }
    }

}

module.exports = Helper;
