const deleteEvent = require("../controllers/eventsControllers")

module.exports= async(req, res)=>{
    const { id } = req.params;
    try {
        const deletedEvent = await deleteEvent(id)
        res.status(200).json(deletedEvent)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}