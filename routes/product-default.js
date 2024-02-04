const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/product-default.ejs"))
module.exports = router;