
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        
        tbl
        .increments();
        
        tbl
        .string('dish', 255)
        .notNullable();
    })

    .createTable('instructions', tbl => {
        
        tbl
        .increments();

        tbl
        .integer('step')
        .notNullable()
        
        tbl
        .text('instructions')
        .notNullable();

        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })

    .createTable('ingredients', tbl => {
        
        tbl
        .increments();
        
        tbl
        .string('ingredient', 255)
        .notNullable();
    })
    
    .createTable('ingredient_quantities', tbl => {
        
        tbl
        .increments();
        
        tbl
        .string('quantity', 255)
        .notNullable();
        
        tbl
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT')
        
        tbl
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
    })
  
};

exports.down = function(knex) {

    return knex.schema
    .dropTableIfExists('ingredient_quantities')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('recipes')
  
};
