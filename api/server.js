const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('../recipes/recipes-router');
const Recipes = require('../recipes/recipes-model');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/recipes', RecipeRouter);

server.get('/api/ingredients/:id/recipes', (req, res) => {
  Recipes.getRecipesByIngredient(req.params.id)
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The recipe information could not be retrieved" });
    });
});

module.exports = server;