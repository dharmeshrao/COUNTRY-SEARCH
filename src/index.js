const express = require("express");
const app = express();
const countryController = require("./controllers/country.controllers");
app.use(express.json());
app.use("/country", countryController);
module.exports = app;
