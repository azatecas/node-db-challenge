const router = require('express').Router();

const Project = require("./project-model.js");

//FETCH PROJECTS
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

//FETCH PROJECTS BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Project
        .findById(id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "error fetching by id 😢😢😢"})
        })

})

//POST PROJECTS 

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

//FETCHING tasks inside of projects
router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;
    Project
        .findTasks(id)
        .then(tasks => {
            if(tasks) {
                res.status(200).json(tasks);
            } else {
                res.status(404).json({
                    errorMessage: "tasks not found in this id"
                })
            }
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "error fetching tasks by id 😢😢😢"})
        })

        

        
})

module.exports = router;