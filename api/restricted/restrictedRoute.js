const router = require('express').Router();
const authRequired = require('../auth/auth-required.js');

router.use(authRequired);

router.get('/', (req, res) => {
  res.json({ message: "I see you've discovered the restricted path." });
})

module.exports = router;
