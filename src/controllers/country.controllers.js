const router = require("express").Router();
const Country = require("../models/country.model");
router.post("/", async (req, res) => {
  const country = await Country.create(req.body);
  return res.status(200).json({ country });
});
router.get("/", async (req, res) => {
  let q = req.query.q;
  const country = await Country.find({
    country: { $regex: new RegExp(q) },
  });
  return res.status(200).json({ country: country });
});

module.exports = router;
