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
                errorMessage:'Error fetching projects 😢😢😢'
            })
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Project
        .findById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "error fetching by id 😢😢😢"})
        })

})

router.post('/', (req, res) => {
    const newProject = req.body;
    Project
        .add(newProject)
        .then(proj => {
            res.status(201).json({ message: 'Posted new project', postedProject: proj})
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "error posting new project 😢😢😢"})
        })

})

module.exports = router;