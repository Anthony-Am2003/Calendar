const moment = require("moment");

const daysController = (monthNumber, yearNumber) => {
  if (
    yearNumber < 1900 ||
    yearNumber > 2123 ||
    !Number.isInteger(Number(yearNumber))
  ) {
    throw new Error("Fecha fuera de rango");
  }
  if (
    monthNumber < 0 ||
    monthNumber > 11 ||
    !Number.isInteger(Number(monthNumber))
  ) {
    throw new Error("Fecha fuera de rango");
  }

  const startDayOfMonth = moment({ yearNumber, monthNumber }).startOf("month");
  const endDayOfMonth = moment({ yearNumber, monthNumber }).endOf("month");

  const daysOfMonth = [];

  let currentDay = startDayOfMonth.clone();

  while (currentDay.isSameOrBefore(endDayOfMonth, "day")) {
    daysOfMonth.push(currentDay.clone());
    currentDay.add(1, "day");
  }
  const formattedDates = daysOfMonth.map((date) => ({
    day: date.format("dddd"),
    date: date.date(),
    fullDate: date.format("YYYY-MM-DD"),
  }));
  return formattedDates;
};

module.exports = { daysController };
