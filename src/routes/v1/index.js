const express = require("express");
const Router = express.Router();
const helpController = require("../../controllers/helpController");
Router.get("/help",helpController.helpDetails);
module.exports = Router;
