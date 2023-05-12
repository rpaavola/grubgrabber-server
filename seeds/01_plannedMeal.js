const mealData = require('../seed_data/planned_meals');
const ingredientData = require('../seed_data/meal_ingredient');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = function (knex) {
    return knex('plannedMeal')
        .del()
        .then(() => {
            return knex('plannedMeal').insert(mealData);
        })
        .then(() => {
            return knex('mealIngredient').del();
        })
        .then(() => {
            return knex('mealIngredient').insert(ingredientData);
        });
};
