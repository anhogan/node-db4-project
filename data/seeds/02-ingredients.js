
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'Cup of Quick Cooking Oats', quantity: 4},
        {id: 2, name: 'Cup of Milk', quantity: 4},
        {id: 3, name: 'Package of Chocolate Chip Cookie Dough', quantity: 2},
        {id: 4, name: 'Quarter Cup of Dried Cranberries', quantity: 2.5},
        {id: 5, name: 'Quarter Cup of Walnuts', quantity: 2.5},
        {id: 6, name: 'Teaspoon of Cinnamon', quantity: 8}
      ]);
    });
};
