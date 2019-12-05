const Users = require('../users/usersModel.js');
const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    const { user, password } = req.headers;

    if(!(user && password)) {
        res.status(401).json({ message: "Provide both USER and PASSWORD." });
    } else {
        Users.findBy({ user })
            .then(_user => {
                if(_user && bcrypt.compareSync(password, _user.password)) next();
                else res.status(401).json({ message: "You shall not pass!"});
            })
            .catch(error => {
                res.status(500).json(error);
            })
    }
}