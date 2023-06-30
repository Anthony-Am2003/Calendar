<<<<<<< HEAD
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
=======
const moment = require('moment');


module.exports = (monthNumber, yearNumber) => {
  if (yearNumber < 1900 || yearNumber > 2123 || !Number.isInteger(Number(yearNumber))) {
    throw new Error("Fecha fuera de rango");
  }
  if (monthNumber < 0 || monthNumber > 11 || !Number.isInteger(Number(monthNumber))) {
    throw new Error("Fecha fuera de rango");
  }

  const startDayOfMonth = moment({ year: yearNumber, month: monthNumber }).startOf('month');
  const endDayOfMonth = moment({ year: yearNumber, month: monthNumber }).endOf('month');
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8

  const daysOfMonth = [];
  let currentDay = startDayOfMonth.clone();

  while (currentDay.isSameOrBefore(endDayOfMonth, "day")) {
    daysOfMonth.push(currentDay.clone());
    currentDay.add(1, "day");
  }
<<<<<<< HEAD
  const formattedDates = daysOfMonth.map((date) => ({
    day: date.format("dddd"),
=======

  const formattedDates = daysOfMonth.map(date => ({
    day: date.format('dddd'),
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8
    date: date.date(),
    fullDate: date.format("YYYY-MM-DD"),
  }));

  return formattedDates;
};
<<<<<<< HEAD

module.exports = { daysController };
=======
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8
