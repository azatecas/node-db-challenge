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
      .then(id => {
        return db("resources")
          .where({ id: id[0] })
          .first();
      });
  }