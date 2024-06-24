const express = require("express");
const router = express.Router();

const petAPI=require("../controllers/api");

router.get("/petData",petAPI.api);

module.exports=router;