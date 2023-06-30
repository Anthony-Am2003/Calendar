const deleteEvent = require('./handlers/deleteEvent');
const getDays = require('./handlers/getDays');
const getMonthOfYears = require('./handlers/getMonthsOfYear')
const postEvents = require('./handlers/postEvents')
const getAllEvents = require('./handlers/getAllEvents')


const { Router } = require("express");

const router = Router();

router.get('/days', getDays)
router.get('/months', getMonthOfYears)
router.post('/events' , postEvents)
router.delete('/events/:id', deleteEvent)
router.get('/events', getAllEvents)


module.exports = router
