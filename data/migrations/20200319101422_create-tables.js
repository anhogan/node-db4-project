
exports.up = function(knex) {
  return knex.schema.createTable('recipes', table => {
    table.increments();
    table.string('name').unique().notNullable();
  })
  .createTable('ingredients', table => {
    table.increments();
    table.string('name').unique().notNullable();
    table.decimal('quantity').notNullable();
  })
  .createTable('instructions', table => {
    table.increments();
    table.integer('step_number').unsigned().notNullable();
    table.text('description').notNullable();
    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
  .createTable('recipes_ingredients', table => {
    table.primary(['recipe_id', 'ingredient_id']);
    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('instructions')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
