const router = require('express').Router();

const usersRouter = require('./users/usersRoute.js');

router.use('/users', usersRouter);

router.get('/', (req, res) => {
    res.json({ message: "It's alive!" });
});

module.exports = router;