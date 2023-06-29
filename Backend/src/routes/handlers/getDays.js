const {monthController} = require('../controllers/daysController')

module.exports = async(req, res) =>{
  try {
    const {monthNumber, yearNumber} = req.body
    const monthActuall = monthController(monthNumber, yearNumber)
    res.status(200).json(monthActuall)
  } catch (error) {
    res.status(500).send(error.message)
  }
}