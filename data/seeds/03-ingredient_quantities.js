
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_quantities').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient_quantities').insert([
        {id: 3, quantity: '1/2 cup', recipe_id: '2', ingredient_id: '3'},
        {id: 2, quantity: '1 cup', recipe_id: '2', ingredient_id: '2'},
        {id: 1, quantity: '1', recipe_id: '1', ingredient_id: '1'}
      ]);
    });
};
