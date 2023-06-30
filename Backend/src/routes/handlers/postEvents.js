const {postEventController} = require ('../controllers/eventController')

module.exports = async (req, res) => {
    const { name, initialDate, finalDate, image,description, location, reminder, category } = req.body
    try {
        if (!name || !initialDate || !finalDate ) throw Error("Completar la información")

        await postEventController(name, initialDate, finalDate, image,description, location, reminder, category )
        res.status(200).json("Agregado con exito!")
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}
