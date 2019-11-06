const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
      .then(recipes => {
          res.json(recipes);
      })
      .catch(err => {
          res.status(500).json({ message: 'Could not retrieve list of recipes from server'});
      });
});

module.exports = router;