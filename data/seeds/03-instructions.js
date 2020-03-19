
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step_number: 1, description: 'Pour oatmeal into a slow cooker', recipe_id: 1},
        {id: 2, step_number: 2, description: 'Add in milk', recipe_id: 1},
        {id: 3, step_number: 3, description: 'Add in your favorite oatmeal toppings', recipe_id: 1},
        {id: 4, step_number: 4, description: 'Turn the slow cooker on low heat overnight', recipe_id: 1},
        {id: 5, step_number: 1, description: 'Open the package of store-bought cookie dough', recipe_id: 2},
        {id: 6, step_number: 2, description: 'Place cookies on a baking sheet', recipe_id: 2},
        {id: 7, step_number: 3, description: 'Bake for amount of time on package', recipe_id: 2}
      ]);
    });
};
