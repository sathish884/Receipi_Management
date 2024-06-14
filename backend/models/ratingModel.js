const mongoose = require("mongoose");

const ratingShema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        recipe: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe" },
        rating: { type: Number, required: true }
    },
    { timestamps: true }
)

modules.exports = mongoose.model("Rating", ratingShema)