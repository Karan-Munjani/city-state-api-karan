let csc = require("country-state-city").default;
const express = require("express");
var router = express.Router();

router.get("/getStatesOfCountry/:cid", (req, res) => {
  res.json(csc.getStatesOfCountry(req.params.cid));
});

router.get("/getStateByCode/:cid/:sid", (req, res) => {
  res.json(csc.getStateByCodeAndCountry(req.params.sid,req.params.cid));
});

module.exports = router;
