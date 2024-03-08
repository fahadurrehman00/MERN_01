const router = require("express").Router();
const {factorial}= require("../controller/authController");

router.get("/factorial", factorial)

module.exports = router;