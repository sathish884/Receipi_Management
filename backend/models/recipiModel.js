const mongoose = require('mongoose');

const recipeShema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        descriptions: { type: String, required: true },
        incredients: [String],
        instructions: String,
        category: String,
        images: [String],
        videos: [String],
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
        ratings: [{ user: { type: mongoose.Schema.Types.ObjectId, ref: "User" } }]
    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipe", recipeShema)