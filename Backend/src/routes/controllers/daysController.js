const moment = require('moment')

const monthController = (monthNumber, yearNumber)=>{
    const month = monthNumber;
    const year = yearNumber;
    
    const startDate = moment({ year, month }).startOf('month');
    const endDate = moment({ year, month }).endOf('month');
    
    const datesOfMonth = [];
    
    let currentDate = startDate.clone();
    
    while (currentDate.isSameOrBefore(endDate, 'day')) {
        datesOfMonth.push(currentDate.clone());
        currentDate.add(1, 'day');
      }
      const formattedDates = datesOfMonth.map(date => ({
        day: date.format('dddd'), 
        date: date.date(), 
        fullDate: date.format('YYYY-MM-DD') 
      }));
      return formattedDates;
    
     };


module.exports = {monthController}