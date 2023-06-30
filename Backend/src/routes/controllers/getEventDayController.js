const {Events} = require('../../db')
const moment = require('moment')

module.exports = async (date) => {
    const formattedDate = `${date}T00:00:00.000Z`
    const eventsDay = await Events.findAll({
      where: { initialDate: formattedDate }
    });
    if(eventsDay.length === 0) throw Error('No Hay Eventos este dia')    
    return eventsDay;
};

