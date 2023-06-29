const { Events } = require("../../db.js")

const postEventController = async (name, initialDate, finalDate, image, description, location, reminder, category) => {

    const newEvent = await Events.create({name, initialDate, finalDate, image, description, location, reminder, category})

    return newEvent
}

module.exports = {
    postEventController
}