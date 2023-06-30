const getDays = require("./handlers/getDays");
const getMonthOfYears = require("./handlers/getMonthsOfYear");
const register = require("./handlers/register");
const login = require("./handlers/login");

const { Router } = require("express");

const router = Router();

router.get("/days", getDays);
router.get("/months", getMonthOfYears);

router.post("/user/register", register);
router.post("/user/login", login);

module.exports = router;
