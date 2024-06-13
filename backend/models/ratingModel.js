const mongoose = require("mongoose");

const ratingShema = new mongoose.Schema(
    {
        rating: { type: Strinng }
    }
)

modules.exports = mongoose.model("Rating", ratingShema)