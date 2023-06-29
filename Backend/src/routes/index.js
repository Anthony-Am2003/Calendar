const deleteEvent = require('./handlers/deleteEvent');
const getDays = require('./handlers/getDays');
const getMonthOfYears = require('./handlers/getMonthsOfYear')


const { Router } = require("express");

const router = Router();

router.get('/days', getDays)
router.get('/months', getMonthOfYears)
router.delete('/events/:id', deleteEvent)

module.exports = router
