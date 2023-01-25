const express = require("express");
const userController = require("../controller/userController");
const { tokenVerify } = require("../middleware/verifyToken");
const Router = express.Router();

Router.post("/register", userController.register);
Router.post("/login", userController.login);

module.exports = Router;
