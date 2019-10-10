const db = require('../data/db-config.js');

module.exports = {
    getInstructions
}

function getInstructions(recipe_id) {
    return db('recipes as r')
      .join('instructions as i', 'r.id', 'i.recipe_id')
      .select('r.dish as Dish', 'i.step as step', 'i.instructions as instructions')
      .where({ recipe_id: recipe_id})
      .orderBy('step');
}