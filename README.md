# Endpoints

## POST /api/mealbuild

-   Creates a new meal.
-   Expected body: { meal_name, quantity, product }

## POST /api/users/login

-   Generates and responds a JWT for the user to use for future authorization.
-   Expected body: { email, password }
-   Response format: { token: "JWT_TOKEN_HERE" }

## GET /api/users/current

-   Gets information about the currently logged in user.
-   If no valid JWT is provided, this route will respond with 401 Unauthorized.
-   Expected headers: { Authorization: "Bearer JWT_TOKEN_HERE" }