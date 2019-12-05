const router = require('express').Router();
const Users = require('./usersModel.js');
const bcrypt = require('bcryptjs');

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

module.exports = router;