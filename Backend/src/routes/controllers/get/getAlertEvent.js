const getAllEvents = require('./getAllEventsController')
const moment =  require('moment');

const getAlert = async(dateI) =>{
    const date = `${dateI}T00:00:00.000Z`
    const allEvents = await getAllEvents()
    const initialDates = [];
    const nameEvents = [];
    for(let i = 0; i<allEvents.length; i++){
       let dateBefore = allEvents[i].initialDate 
       let momentDate = moment(dateBefore).subtract(0, "days").toISOString();
       let dataEvents = {date:momentDate, name:allEvents[i].name}
       initialDates.push(dataEvents)
    }for(let x = 0; x<initialDates.length; x++){
        if(initialDates[x].date === date){
            nameEvents.push(initialDates[x].name)
        }
    }

    return nameEvents;


}



module.exports = {getAlert}