const db = require('../data/db-config.js');

module.exports = {
    find,    
};


function find() {
    // return db("tasks");
    return db("tasks")
            
            .select(
                "projects.name",
                
                "tasks.description as tDesk",
                "projects.description as pDesk",
                "tasks.notes",
                "tasks.completed"
            )
            .from("tasks")
            .join("projects","projects.id","tasks.project_id")
};
