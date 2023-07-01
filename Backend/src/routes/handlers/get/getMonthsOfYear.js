const monthsController = require("../../controllers/get/getMonthsController");

module.exports = (req, res) => {
  try {
    const monthOfYear = monthsController();
    res.status(200).json(monthOfYear);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
