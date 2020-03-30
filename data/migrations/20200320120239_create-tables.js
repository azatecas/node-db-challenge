
exports.up = function(knex) {
    return (
        knex.schema
          .createTable("projects", tbl => {
            tbl.increments();
            tbl
              .text("name", 255)
              .notNullable()
              .unique()
              .index();
            tbl.text("description");
            tbl.boolean("completed").defaultTo("false");
          })
    
          //   resources
          .createTable("resources", tbl => {
            tbl.increments();
            tbl
              .text("name", 255)
              .notNullable()
              .unique()
              .index();
            tbl.text("description");
          })
    
          //   tasks
          .createTable("tasks", tbl => {
            tbl.increments();
            tbl.text("description").notNullable();
            tbl.text("notes");
            tbl.boolean("completed").defaultTo("false");
            tbl
              .integer("project_id")
              .notNullable()
              .unsigned()
              .references("id")
              .inTable("projects")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE");
          })
    
          //   project_resources
          .createTable("project_resources", tbl => {
            tbl.primary(["project_id", "resource_id"]);
            tbl
              .integer("project_id")
              .notNullable()
              .unsigned()
              .references("id")
              .inTable("projects")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE");
            tbl
              .integer("resource_id")
              .notNullable()
              .unsigned()
              .references("id")
              .inTable("resources")
              .onDelete("RESTRICT")
              .onUpdate("CASCADE");
          })
      );
};


exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};
