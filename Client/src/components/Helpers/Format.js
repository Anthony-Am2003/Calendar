export const monthName = (monthNumer) => {
  switch (monthNumer) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
  }
};

export const dayName = (dayNumber) => {
  switch (dayNumber) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    default:
      return "Saturday";
  }
};

export const completeMonth = (month, prev, next) => {
  if (month.length && prev.length && next.length) {
    if (month.day !== "Sunday") {
      while (month[0].day !== "Sunday") {
        let ultimo = prev[prev.length - 1];
        month.unshift(ultimo);
        prev.pop();
      };
    };
    if (month[month.length - 1].day !== "Saturday") {
      while (month[month.length - 1].day !== "Saturday") {
        let primero = next[0];
        month.push(primero);
        next.shift();
      };
    };
  };
};