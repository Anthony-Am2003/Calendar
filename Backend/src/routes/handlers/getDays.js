<<<<<<< HEAD
const { daysController } = require("../controllers/daysController");

module.exports = async (req, res) => {
  try {
    const { monthNumber, yearNumber } = req.query;
    const monthActuall = daysController(monthNumber, yearNumber);
    res.status(200).json(monthActuall);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
=======
const  daysController  = require('../controllers/daysController');

module.exports = async (req, res) => {
  try {
    const {monthNumber, yearNumber} = req.query
    const monthActuall = daysController(monthNumber, yearNumber)
    res.status(200).json(monthActuall)
  } catch (error) {
    res.status(500).send(error.message);
  }
};
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8
