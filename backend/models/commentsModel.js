const mongoose = require('mongoose');

const commentShema = new mongoose.Schema(
    {
        comment: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Comment", commentShema)