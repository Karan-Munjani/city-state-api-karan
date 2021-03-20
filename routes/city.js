let csc = require("country-state-city").default;
const express = require("express");
var router = express.Router();

router.get("/getAllCities", (req, res) => {
  res.json(csc.getAllCities());
});

router.get("/getCitiesOfCountry/:cid", (req, res) => {
  res.json(csc.getCitiesOfCountry(req.params.cid));
});

router.get("/getCitiesOfState/:cid/:sid", (req, res) => {
  res.json(csc.getCitiesOfState(req.params.cid, req.params.sid));
});

module.exports = router;
