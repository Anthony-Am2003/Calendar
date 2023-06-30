const deleteEvent = require("./handlers/deleteEvent");

const getDays = require("./handlers/getDays");
const getMonthOfYears = require("./handlers/getMonthsOfYear");
const postEvents = require("./handlers/postEvents");
const getAllEvents = require("./handlers/getAllEvents");
const register = require("./handlers/register");
const login = require("./handlers/login");
const getEventDay = require('../routes/handlers/getEventsDay')
const getEventsByName = require("./handlers/getEventsByName")
const putEvent = require('./handlers/putEvent')

const { Router } = require("express");

const router = Router();

router.get("/days", getDays);
router.get("/months", getMonthOfYears);
router.post("/events", postEvents);
router.delete("/events/:id", deleteEvent);
router.get("/events", getAllEvents);
router.get('/eventday', getEventDay)
router.get("/events/name",getEventsByName)
router.post("/user/register", register);
router.post("/user/login", login);
router.put('/eventput', putEvent)

module.exports = router;