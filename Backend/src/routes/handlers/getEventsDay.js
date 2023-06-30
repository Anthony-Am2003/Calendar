const { log } = require('console');
const getEventController =  require('../controllers/getEventDayController')

module.exports = async(req, res)=>{
    try {
        const {date} = req.query;
        const allEventsOFDay = await getEventController(date)
        res.status(200).json(allEventsOFDay)
    } catch (error) {
        res.status(500).send(error.message)
    }
}