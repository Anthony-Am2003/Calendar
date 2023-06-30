const { Events } = require("../../../db.js");
const moment = require("moment");

module.exports = async (
  name,
  initialDate,
  finalDate,
  image,
  description,
  location,
  reminder,
  category
) => {
  const allDates = [];

  const startDate = moment(initialDate, "YYYY-MM-DD");
  const endDate = moment(finalDate, "YYYY-MM-DD");

  while (startDate.isSameOrBefore(endDate)) {
    allDates.push(startDate.format("YYYY-MM-DD"));
    startDate.add(1, "day");
  }

  const newEvent = await Events.create({
    name,
    initialDate,
    finalDate,
    image,
    description,
    location,
    reminder,
    category,
    allDates,
  });

  return newEvent;
};
