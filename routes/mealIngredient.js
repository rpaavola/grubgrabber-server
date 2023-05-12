const router = require('express').Router();
const mealIngredientController = require('../controllers/mealIngredientController');

router
    .route('/')
    .get(mealIngredientController.getMealIngredients)

module.exports = router;