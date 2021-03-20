let csc = require("country-state-city").default;
const express = require("express");
var router = express.Router();

router.get("/getAllCountries", (req, res) => {
  res.json(csc.getAllCountries());
});

router.get("/getCountryByCode/:cid", (req, res) => {
  res.json(csc.getCountryByCode(req.params.cid));
});

module.exports = router;
