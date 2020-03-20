const router = require('express').Router();

const Project = require("./project-model.js");

router.get('/', (req, res) => {
    Project
        .find()
        .then(project => {
            res.status(200).json(project)
        })
        .catch(()=> {
            res.status(500).json({
                errorMessage:'Error boy'
            })
        })
})

module.exports = router;