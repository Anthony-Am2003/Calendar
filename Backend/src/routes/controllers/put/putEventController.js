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

  const updatedValues = {};

  if (name) {
    updatedValues.name = name;
  }

  if (initialDate) {
    updatedValues.initialDate = initialDate;
  }

  if (finalDate) {
    updatedValues.finalDate = finalDate;
  }

  if (image) {
    updatedValues.image = image;
  }

  if (description) {
    updatedValues.description = description;
  }

  if (location) {
    updatedValues.location = location;
  }

  if (reminder) {
    updatedValues.reminder = reminder;
  }

  if (category) {
    updatedValues.category = category;
  }

  if (allDates.length > 0) {
    updatedValues.allDates = allDates;
  }

  await eventToPut.update(updatedValues);
};
