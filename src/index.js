const express = require("express");
const app = express();
const countryController = require("./controllers/country.controllers");
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/country", countryController);
module.exports = app;
