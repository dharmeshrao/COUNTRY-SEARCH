const mongoose = require("mongoose");
module.exports = () => {
  return mongoose.connect("mongodb+srv://country:country123@cluster0.dxb6c.mongodb.net/country?retryWrites=true&w=majority");
};
