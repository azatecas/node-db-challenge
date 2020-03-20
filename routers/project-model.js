const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    findTasks,
    
};

function add(project){
    return db("projects")
        .insert(project)
};

function find() {
    return db("projects");
};

function findById(id) {
    return db("projects")
        .where({ id })
        .first();
};

function findTasks(id) {
    return db("projects")
        .where({ id })
        .then(item => {
            if(item.length !== 0){
                return db("tasks")
                    .join("projects", "tasks.project_id", "projects.id")
                    .select(
                        "projects.name",
                        "projects.description",
                        "tasks.description",
                        "tasks.notes",
                        "tasks.completed"
                    )
                    .where("tasks.project_id", id)
            }
        });
}
