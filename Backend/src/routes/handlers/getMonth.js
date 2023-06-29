const {monthController} = require('../controllers/monthController')

module.exports = async(req, res) =>{
  try {
    const {nmonthNumber, yearNumber} = req.body
    const monthActuall = monthController()
    res.status(200).json(monthActuall)
  } catch (error) {
    res.status(500).send(error.message)
  }
}