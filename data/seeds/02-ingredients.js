
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'Pot Pie'},
        {id: 2, ingredient: 'Instant Potatoes'},
        {id: 3, ingredient: 'Water'}
      ]);
    });
};
