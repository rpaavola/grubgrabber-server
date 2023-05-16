# Endpoints

## MEALS

## GET /api/plannedmeals

-   Gets all planned meals

## POST /api/plannedmeals

-   Creates a new meal
-   Expected body: { title, type}

## DELETE /api/plannedmeals/:mealId

-   Deletes a selected meal

 ## DELETE /api/plannedmeals

 -   Deletes ALL meals

## INGREDIENTS

## GET /api/plannedmeals/:mealID/mealingredients

-   Gets a meal ingredients

## POST /api/plannedmeals/:mealID/mealingredients

-   Creates a new ingredient.
-   Expected body: { quantity, ingredient}

## PUT /api/plannedmeals/:mealID/mealingredients/:ingredientId

-   Updates status of meal ingredient

## DELETE /api/plannedmeals/:mealID/mealingredients

-   Deletes an ingredient

## Get /api/mealingredient

 - Get ALL ingredients
