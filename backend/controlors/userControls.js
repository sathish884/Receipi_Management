const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register new user
exports.registerUser = async (re, res) => {
    const { userName, email, password } = req.body;
    try {
        const hashPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ userName, email, password: hashPassword });
        await newUser.save();
        res.status(200).json({
            message: "User successfully registered"
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server error",
            err: error.message
        })
    }
}

// Login user and generated token
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email });
        // Checking with user email or password
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({
                message: "Invalid Credentials"
            })
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, { expiresIn: "1h" });

        res.status(200).json({ token })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}