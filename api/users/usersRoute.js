const router = require('express').Router();
const Users = require('./usersModel.js');
const bcrypt = require('bcryptjs');

const authRequired = require('../auth/auth-required.js');

router.post('/register', async (req, res) => {
    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 16);
    user.password = hash;

    try {
        const response = await Users.insert(user);
        res.status(201).json(response);
    } catch(error) {
        res.status(500).json({ message: "Unable to create user.", error });
    }
});

router.post('/login', async (req, res) => {
    const { user, password } = req.body;
    try {
        const _user = await Users.findBy({ user }).first();
        if (_user && bcrypt.compareSync(password, _user.password)) {
            if (req.session) {
                req.session.userId = _user.id;
            }
            res.status(200).json({ message: "Logged in" });
        } else res.status(401).json({ message: "You shall not pass!" });
    } catch(error) {
        res.status(500).json(error);
    }
});

router.get('/', authRequired, async (req, res) => {
        const users = await Users.find();
        res.status(200).json(users);
});

module.exports = router;