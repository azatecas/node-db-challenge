const db = require("../data/db-config");

module.exports = {
    add,
    find,
}

function find() {
    return db("resources");    
}

function add(newResource) {
    return db("resources")
        .insert(newResource)
        .then(item => {
            return db("resources")
            .where({ item: item[0]})
            .first();
        })    
}