const router = require('express').Router();

const Project = require("./resources-model.js");

router.get('/', (req, res) => {
    res.send('<h1>router working</h2>')
})

module.exports = router;