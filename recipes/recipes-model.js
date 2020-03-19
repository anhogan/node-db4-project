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
  return db('recipes')
    .join('recipes_ingredients as ri', 'ri.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredients.id', 'ri.ingredients_id')
    .select('recipes.name', 'ingredients.name', 'ingredients.quantity')
    .where({ recipe_id: recipe_id })
};

function getInstructions(recipe_id) {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('recipes.name', 'instructions.step_number', 'instructions.description')
    .where({ recipe_id: recipe_id })
    .orderBy('instructions.step_number');
};