const Recipe = require("../models/recipiModel");

// Create Recipe
exports.createRecipe = async (req, res) => {
    try {

        const { title, description, instruction, incredients, category, images, videos, user } = req.body

        const newRecipe = new Recipe({ title, description, instruction, incredients, category, images, videos, user });

        await newRecipe.save();

        res.status(200).json({
            message: "Recipe created successfully"
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            err: error.message
        })
    }
}

// Get All Recipes
exports.getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find().populate("user").populate("comments");
        res.status(200).json({ data: recipes });
    } catch (error) {
        res.status(500).json({ error });
    }
}