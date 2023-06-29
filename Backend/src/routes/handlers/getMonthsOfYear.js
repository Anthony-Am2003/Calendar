const {yearController} = require('../controllers/yearController');

module.exports = (req, res)=>{
    try {
        const monthOfYear = yearController()
        res.status(200).json(monthOfYear)
         } catch (error) {
        res.status(500).send(error.message)
    }
}