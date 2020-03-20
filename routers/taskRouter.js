const router = require('express').Router();

const Task = require("./tasks-model.js");

router.get('/', (req, res) => {
    Task
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