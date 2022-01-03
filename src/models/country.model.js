const mongoose = require("mongoose");
const countrySchema = mongoose.Schema({
  country: { type: String, require: true },
  city: { type: String, require: true },
});
module.exports = mongoose.model("country", countrySchema);
