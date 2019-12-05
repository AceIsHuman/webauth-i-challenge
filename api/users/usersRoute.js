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

router.get('/', authRequired, async (req, res) => {
        const users = await Users.find();
        res.status(200).json(users);
});

module.exports = router;