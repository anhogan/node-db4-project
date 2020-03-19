const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db()
};

function getShoppingList(recipe_id) {
  return db()
};

function getInstructions(recipe_id) {
  return db()
};