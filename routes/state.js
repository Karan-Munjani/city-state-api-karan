let csc = require("country-state-city").default;
const express = require("express");
var router = express.Router();

router.get("/getStatesOfCountry/:cid", (req, res) => {
  res.json(csc.getStatesOfCountry(req.params.cid));
});

router.get("/getAllCities");

module.exports = router;
2