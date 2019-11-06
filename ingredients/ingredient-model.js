const db = require('../data/db-config.js');

module.exports = {
    getShoppingList
};

function getShoppingList(recipe_id) {
    return db('ingredient_quantities as q')
      .join('ingredients as i', 'q.ingredient_id', 'i.id')
      .select('q.quantity as Quantity', 'i.ingredient as Ingredient')
      .where({ recipe_id: recipe_id})
}