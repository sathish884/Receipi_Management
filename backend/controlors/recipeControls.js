const Recipe = require("../models/recipiModel");

exports.createRecipe = async (req, res) => {
    try {

        const { title, description, instruction, incredients, category, images, videos } = req.body

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