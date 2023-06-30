const {putEvent} = require('../controllers/putEventController');

module.exports = async(req, res)=>{
  
    try {
        const {id, name, initialDate, finalDate, image,description, location, reminder, category} = req.body;
        console.log(name)
        const EventUpdate = await putEvent(id, name, initialDate, finalDate, image,description, location, reminder, category);
        res.status(200).send('Se Edito con exito')
    } catch (error) {
        res.status(404).send(error.mesagge)
    }
  
}