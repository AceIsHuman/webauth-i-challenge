const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ message: "It's alive!" });
});

module.exports = router;