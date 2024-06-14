const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const userRoutes = require("./routers/userRoutes");
const recipeRoutes = require("./routers/recipeRoutes");
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/apiAuth", userRoutes);
app.use("/apiAuth", recipeRoutes);

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch(error => {
    console.log("Connection failed", error.message);
});
