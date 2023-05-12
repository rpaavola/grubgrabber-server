/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
 */


exports.up = function (knex) {
    return knex.schema
        .createTable('plannedMeal', (table) => {
            table.uuid('id').primary();
            table.string('title').notNullable();
            table.string('type').notNullable();
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
        .createTable('mealIngredient', (table) => {
            table.uuid('id').primary();
            table.string('quantity').notNullable();
            table.string('ingredient').notNullable();
            table
                .uuid('meal_id')
                .references('plannedMeal.id')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        })
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function (knex) {
    return knex.schema.dropTable('mealIngredient').dropTable('plannedMeal');
};