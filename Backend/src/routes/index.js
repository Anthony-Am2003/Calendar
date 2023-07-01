const { Router } = require("express");
const router = Router();

// DELETE ROUTES
const deleteEvent = require("./handlers/delete/deleteEvent");
//---------------

// GET ROUTES
const getAllEvents = require("./handlers/get/getAllEvents");
const getDays = require("./handlers/get/getDays");
const getEventsByName = require("./handlers/get/getEventByName");
const getEventDay = require("./handlers/get/getEventDay");
const getMonthsOfYear = require("./handlers/get/getMonthsOfYear");
const getAlerts = require('./handlers/get/getAlertsEvents')
//---------------

// POST ROUTES
const postEvent = require("./handlers/post/postEvent");
const postLogin = require("./handlers/post/postLogin");
const postRegister = require("./handlers/post/postRegister");
//---------------

// PUT ROUTES
const putEvent = require("./handlers/put/putEvent");
//---------------

router.delete("/events/:id", deleteEvent);

router.get("/events", getAllEvents);
router.get("/days", getDays);
router.get("/events/name", getEventsByName);
router.get("/eventday", getEventDay);
router.get("/months", getMonthsOfYear);

router.post("/events", postEvent);
router.post("/user/login", postLogin);
router.post("/user/register", postRegister);

router.put("/eventput", putEvent);
router.get('/alerts', getAlerts)

module.exports = router;
