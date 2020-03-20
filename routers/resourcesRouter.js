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

router.post('/', (req, res) => {
    const newResource = req.body;
    Resource
        .add(newResource)
        .then(item => {
            res.status(201).json({ message: 'Posted new resource', postedResource: item})
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "error posting new resource😢😢😢"})
        })

})

module.exports = router;