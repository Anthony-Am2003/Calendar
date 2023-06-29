const getDays = require('./handlers/getDays');
const getMonthOfYears = require('./handlers/getMonthsOfYear')
const postEvents = require('./handlers/postEvents')


const { Router } = require("express");

const router = Router();

router.get('/days', getDays)
router.get('/months', getMonthOfYears)
router.post('/events' , postEvents)

module.exports = router
