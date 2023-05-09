require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const groceryRoutes = require("./routes/groceryList");
const mealbuildRoutes = require("./routes/mealBuild");
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/grocery", groceryRoutes);
app.use("/api/mealBuild", mealbuildRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
