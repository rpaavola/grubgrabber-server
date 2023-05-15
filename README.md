# Endpoints

## MEALS

## GET /api/plannedmeal

-   Gets all planned meals

## POST /api/plannedmeal

-   Creates a new meal.
-   Expected body: { title, type}

## DELETE /api/plannedmeal

-   Deletes a meal.

## INGREDIENTS

## GET /api/plannedmeal/:mealID/mealingredient

-   Gets a meal ingredients

## POST /api/plannedmeal/:mealID/mealingredient

-   Creates a new ingredient.
-   Expected body: { quantity, ingredient}

## DELETE /api/plannedmeal/:mealID/mealingredient

-   Deletes an ingredient.

## Get /api/mealingredient

 - Get ALL ingredients