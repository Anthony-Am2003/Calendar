const { Events } = require("../../db")

const getAllEvents = async()=>{
    const allEvents = await Events.findAll();
    return allEvents;
}

module.exports = {getAllEvents}