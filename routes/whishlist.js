const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/whishlist.ejs"))
module.exports = router;