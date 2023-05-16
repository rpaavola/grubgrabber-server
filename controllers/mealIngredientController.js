const knex = require('knex')(require('../knexfile'));
const { v4 } = require('uuid');

// Gets ALL Ingredients
exports.getMealIngredients = (_req, res) => {
  knex('mealIngredient')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Ingredients: ${err}`)
    );
};

exports.getMealIngredientsForMeal = (req, res) => {
  const { mealId } = req.params
  knex('mealIngredient')
    .where({ meal_id: mealId })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Ingredients: ${err}`)
    );
};

exports.deleteMealIngredient = (req, res) => {
  const { mealId, ingredientId } = req.params
  knex('mealIngredient')
    .delete()
    .where({ meal_id: mealId, id: ingredientId })
    .then(() => {
      res.status(204).send(`Deleted`);
    })
    .catch((err) =>
      res.status(400).send(`Error deleting: ${err}`)

    );
};

exports.addMealIngredient = (req, res) => {
  const { mealId } = req.params

  // validator to check that all fields are filled in
  if (!req.body.quantity || !req.body.ingredient) {
    return res.status(400).send('Please ensure fields are filled in before submitting');
  }

  // destructure req.body so can add in id using uuid
  const { quantity, ingredient } = req.body;

  const newMealIngredientObj = {
    id: v4(),
    meal_id: mealId,
    quantity,
    ingredient,
  }

  knex('mealIngredient')
    .insert(newMealIngredientObj)
    .then(() => {
      res.status(201).json(newMealIngredientObj);
    })
    .catch((err) => res.status(400).send(`Error creating Meal Ingredient: ${err} `));
};

exports.updateMealIngredient = (req, res) => {
  const { ingredientId } = req.params
  knex('mealIngredient')
    .where({ id: ingredientId })
    .update(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving Ingredients: ${err}`)
    );
};

exports.putMealIngredient = (req, res) => {
  res.status(500).send('Not an implemented feature as of yet');
};