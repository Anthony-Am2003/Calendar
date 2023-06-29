const  daysController  = require('../controllers/daysController');

module.exports = async (req, res) => {
  try {
    const { monthNumber, yearNumber } = req.query; 
    const monthActuall = daysController(monthNumber, yearNumber);
    res.status(200).json(monthActuall);
  } catch (error) {
    res.status(500).send(error.message);
  }
};