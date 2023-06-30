<<<<<<< HEAD
const getDays = require("./handlers/getDays");
const getMonthOfYears = require("./handlers/getMonthsOfYear");
const register = require("./handlers/register");
const login = require("./handlers/login");
=======
const deleteEvent = require('./handlers/deleteEvent');
const getDays = require('./handlers/getDays');
const getMonthOfYears = require('./handlers/getMonthsOfYear')
const postEvents = require('./handlers/postEvents')
const getAllEvents = require('./handlers/getAllEvents')

>>>>>>> bec4343096aa607c4346d430a79308223d1263c8

const { Router } = require("express");

const router = Router();

<<<<<<< HEAD
router.get("/days", getDays);
router.get("/months", getMonthOfYears);
=======
router.get('/days', getDays)
router.get('/months', getMonthOfYears)
router.post('/events' , postEvents)
router.delete('/events/:id', deleteEvent)
router.get('/events', getAllEvents)

>>>>>>> bec4343096aa607c4346d430a79308223d1263c8

router.post("/user/register", register);
router.post("/user/login", login);

module.exports = router;
