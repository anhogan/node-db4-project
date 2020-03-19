const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
};

function getShoppingList(recipe_id) {
  return db()
};

function getInstructions(recipe_id) {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('recipes.name', 'instructions.step_number', 'instructions.description')
    .where({ recipe_id: recipe_id })
    .orderBy('instructions.step_number');
};