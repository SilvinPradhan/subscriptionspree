const express = require("express");
const { prices } = require("../controllers/subscriptions");
const router = express.Router();

router.get("/prices", prices);

module.exports = router;
