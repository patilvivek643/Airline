const express = require("express");
const Router = express.Router();

const v1routes = require("./v1");

Router.use("/v1",v1routes);

module.exports = Router;