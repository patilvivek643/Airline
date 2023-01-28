const express = require("express");

const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const Router = express.Router();
const helpController = require("../../controllers/helpController");
Router.get("/help",helpController.helpDetails);



module.exports = Router;
