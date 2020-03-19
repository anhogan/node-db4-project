const express = require('express');
const helmet = require('helmet');

const RecipeRouter = require('../recipes/recipes-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/recipes', RecipeRouter);

server.get('/api/ingredients/:id/recipes', (req, res) => {

});

module.exports = server;