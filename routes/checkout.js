const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.render(__dirname+"/checkout.ejs"))
module.exports = router;