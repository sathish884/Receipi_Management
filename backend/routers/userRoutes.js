const express = require("express");
const UserControls = require("../controlors/userControls");

const router = express.Router();

router.route("/registerUser").post(UserControls.registerUser);
router.route("/login").post(UserControls.loginUser);

module.exports = router;