const RecipeControl = require("../controlors/recipeControls")
const express = require("express");

const router = express.Router();

router.route("/createRecipe").post(RecipeControl.createRecipe);

module.exports = router;