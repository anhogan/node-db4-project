const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
  Recipes.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The recipe information could not be retrieved" });
    });
});

router.get('/:id/shoppingList', (req, res) => {
  Recipes.getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The ingredient information could not be retrieved" });
    });
});

router.get('/:id/instructions', (req, res) => {
  Recipes.getInstructions(req.params.id)
    .then(instructions => {
      res.status(200).json(instructions);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "The instruction information could not be retrieved" });
    });
});

module.exports = router;