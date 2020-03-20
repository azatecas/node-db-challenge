const db = require('../data/db-config.js');

module.exports = {
    add,
    find,
    findById,
    findTasks,
    addTasksToProject
    
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



function addTasksToProject(task, id) {
    return db("projects")
    .where({ id })
    .first()
    .then(item => {
      return db("tasks")
        .insert(task, "id")
        .then(added => {
          return db("tasks")
            .where({ id: added[0] })
            .first();
        });
    });
}