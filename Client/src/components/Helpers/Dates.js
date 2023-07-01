const fecha = new Date();
export const dayNumberTd = fecha.getDate();
export const monthNumberTd = fecha.getMonth();
export const yearNumberTd = fecha.getFullYear();

//-------------------------------------------

const yearTd = yearNumberTd;
const monthTd =
  monthNumberTd > 9 ? monthNumberTd + 1 : "0" + (monthNumberTd + 1);
const dayTd = dayNumberTd > 9 ? dayNumberTd : "0" + dayNumberTd;

export const today = `${yearTd}-${monthTd}-${dayTd}`;
export const week = [0, 1, 2, 3, 4, 5, 6];

//-------------------------------------------
