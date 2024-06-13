const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors)
app.use(bodyParser.json())

mongoose.connect(process.env.MONGOOSE_URI).then(() => {
    console.log("MongoDB connected successfully");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}).catch(error => {
    console.log("Connection failed");
})
