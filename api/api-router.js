const router = require('express').Router();

const usersRouter = require('./users/usersRoute.js');
const restrictedRouter = require('./restricted/restrictedRoute.js');

router.use('/users', usersRouter);
router.use('/restricted', restrictedRouter);

router.get('/', (req, res) => {
    res.json({ message: "It's alive!" });
});

module.exports = router;