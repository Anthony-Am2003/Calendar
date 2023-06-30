const {getEventsByName} = require ("../controllers/getEventsByNameController")

module.exports = async (req,res) =>{
    try {
        const {name} = req.query;
        const response = await getEventsByName(name);
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json(error.message)
    }
}