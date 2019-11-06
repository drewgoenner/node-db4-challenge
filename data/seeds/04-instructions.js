
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {id: 1, step: '1', instructions: 'open box', recipe_id: '1'},
        {id: 2, step: '2', instructions: 'cut top of pot pie', recipe_id: '1'},
        {id: 3, step: '3', instructions: 'bake at 425 for 45 minutes', recipe_id: '1'},
        {id: 4, step: '4', instructions: 'put water in pot', recipe_id: '2'},
        {id: 5, step: '5', instructions: 'add instant flakes', recipe_id: '2'},
        {id: 6, step: '6', instructions: 'boil for five minutes, then fluff', recipe_id: '2'}
      ]);
    });
};
