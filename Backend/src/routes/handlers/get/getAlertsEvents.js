const {getAlert} = require('../../controllers/get/getAlertEvent');

module.exports = async(req, res) =>{
    try {
        const {dateI} = req.query;
        const eventsAlert = await getAlert(dateI);
        console.log(dateI)
        res.status(200).json(eventsAlert);
    } catch (error) {
        res.status(404).send(error.message)
    }
}