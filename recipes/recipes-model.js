const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient
};

function getRecipes() {
  return db('recipes');
};

function getShoppingList(recipe_id) {
  return db('recipes')
    .join('recipes_ingredients as ri', 'ri.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .select('ingredients.name as Ingredient', 'ingredients.quantity as Quantity')
    .where({ recipe_id: recipe_id });
};

function getInstructions(recipe_id) {
  return db('instructions')
    .join('recipes', 'recipes.id', 'instructions.recipe_id')
    .select('instructions.step_number', 'instructions.description')
    .where({ recipe_id: recipe_id })
    .orderBy('instructions.step_number');
};

function getRecipesByIngredient(ingredient_id) {
  return db('recipes')
    .join('recipes_ingredients as ri', 'ri.recipe_id', 'recipes.id')
    .join('ingredients', 'ingredients.id', 'ri.ingredient_id')
    .select('recipes.name')
    .where({ ingredient_id: ingredient_id });
};