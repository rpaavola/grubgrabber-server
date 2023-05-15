const knex = require('knex')(require('../knexfile'));
const { v4 } = require('uuid');

// Gets ALL Planned Meals
exports.getPlannedMeals = (_req, res) => {
    knex('plannedMeal')
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) =>
            res.status(400).send(`Error retrieving Planned Meals: ${err}`)
        );
};

exports.deletePlannedMeal = (req, res) => {
    const { mealId } = req.params
    knex('plannedMeal')
        .delete()
        .where({ id: mealId })
        .then(() => {
            res.status(204).send(`Deleted`);
        })
        .catch((err) =>
            res.status(400).send(`Error deleting: ${err}`)
        );
};

exports.addPlannedMeal = (req, res) => {

    // validator to check that all fields are filled in
    if (!req.body.title || !req.body.type) {
        return res.status(400).send('Please ensure fields are filled in before submitting');
    }

    // destructure req.body so can add in id using uuid
    const { title, type } = req.body;

    const newPlannedMealObj = {
        id: v4(),
        title,
        type,
    }

    knex('plannedMeal')
        .insert(newPlannedMealObj)
        .then(() => {
            res.status(201).json(newPlannedMealObj);
        })
        .catch((err) => res.status(400).send(`Error creating Planned Meal: ${err} `));
};