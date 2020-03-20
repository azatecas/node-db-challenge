const router = require('express').Router();

const Resource = require("./resources-model.js");

router.get('/', (req, res) => {
    Resource
    .find()
        .then(resource => {
            res.status(200).json(resource)
        })
        .catch(()=> {
            res.status(500).json({
                errorMessage:'Error fetching projects 😢😢😢'
            })
        })
})

module.exports = router;