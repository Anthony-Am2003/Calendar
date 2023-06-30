const { Events } = require("../../db")

const deleteEvent = async(id)=>{
    await Events.destroy({where: {id}});
    const allEvents = await Events.findAll();

    return allEvents;
}

const getAllEvents = async()=>{
    const allEvents = await Events.findAll();
    return allEvents;
}

module.exports = {
    deleteEvent,
    getAllEvents,

};