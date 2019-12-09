const Users = require('../users/usersModel.js');
const bcrypt = require('bcryptjs');

async function authReq(req, res, next) {
    if(!(req.session && req.session.userId)) {
        res.status(400).json({ message: "No credentials provided." });
    } else {
        next();
    }
}

module.exports = authReq;