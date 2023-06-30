const { Events } = require("../../../db");
const moment = require("moment");

module.exports = async (
  id,
  name,
  initialDate,
  finalDate,
  image,
  description,
  location,
  reminder,
  category
) => {
  const eventToPut = await Events.findByPk(id);

  if (!eventToPut) {
    throw new Error("Este evento no existe");
  }

  const allDates = [];

  const startDate = moment(initialDate, "YYYY-MM-DD");
  const endDate = moment(finalDate, "YYYY-MM-DD");

  while (startDate.isSameOrBefore(endDate)) {
    allDates.push(startDate.format("YYYY-MM-DD"));
    startDate.add(1, "day");
  }

  await eventToPut.update({
    name: name,
    initialDate: initialDate,
    finalDate: finalDate,
    image: image,
    description: description,
    location: location,
    reminder: reminder,
    category: category,
    allDates: allDates,
  });
};
