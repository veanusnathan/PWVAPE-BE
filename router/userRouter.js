const express = require("express");
const userController = require("../controller/userController");
const Router = express.Router();

Router.post("/register", userController.register);
Router.get("/login", userController.login);

module.exports = Router;
