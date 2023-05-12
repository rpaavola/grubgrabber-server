const router = require('express').Router();
const plannedMealController = require('../controllers/plannedMealController');
const mealIngredientsController = require('../controllers/mealIngredientController');

router
    .route('/')
    .get(plannedMealController.getPlannedMeals)
    .post(plannedMealController.addPlannedMeal);

router
    .route('/:mealId')
    .delete(plannedMealController.deletePlannedMeal);

router
    .route('/:mealId/mealingredients')
    .get(mealIngredientsController.getMealIngredientsForMeal)
    .post(mealIngredientsController.addMealIngredient);

router
    .route('/:mealId/mealIngredients/:ingredientId')
    .put(mealIngredientsController.putMealIngredient)
    .delete(mealIngredientsController.deleteMealIngredient);

module.exports = router;