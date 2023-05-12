require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mealingredientRoutes = require("./routes/mealIngredient");
const plannedmealsRoutes = require("./routes/plannedMeal");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/plannedmeals", plannedmealsRoutes);
app.use("/api/mealingredients", mealingredientRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
