import axios from "axios";

import {
  GET_DAYS,
  GET_MONTHS,
  GET_MONTHS_PER_YEAR,
  GET_EVENT,
  GET_DETAIL_EVENT,
} from "./action-types";

const URL = "http://localhost:7286";

export const getDays = (monthNumber, yearNumber) => {
  return async (dispatch) => {
    try {
      const months = {
        prevMonth: [],
        actualMonth: [],
        nextMonth: [],
        yearNumber: yearNumber,
      };

      const actualMonth = (
        await axios.get(
          `${URL}/days?monthNumber=${monthNumber}&yearNumber=${yearNumber}`
        )
      ).data;
      months.actualMonth = actualMonth;

      // 0 es enero y 11 es diciembre
      if (monthNumber === 0) {
        const prevMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${monthNumber + 11}&yearNumber=${
              yearNumber - 1
            }` // Obtengo diciembre del año anterior
          )
        ).data;
        months.prevMonth = prevMonth;
      } else {
        const prevMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${
              monthNumber - 1
            }&yearNumber=${yearNumber}`
          )
        ).data;
        months.prevMonth = prevMonth;
      }

      if (monthNumber === 11) {
        const nextMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${monthNumber - 11}&yearNumber=${
              yearNumber + 1
            }` // Obtengo enero del año siguiente
          )
        ).data;
        months.nextMonth = nextMonth;
      } else {
        const nextMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${
              monthNumber + 1
            }&yearNumber=${yearNumber}`
          )
        ).data;
        months.nextMonth = nextMonth;
      }

      return dispatch({type: GET_DAYS, payload: months});
    } catch (error) {
      return console.log(error);
    }
  };
};

export const getMonths = () => {
  return async (dispatch) => {
    try {
      const allMonths = (await axios.get(`${URL}/months`)).data;

      return dispatch({type: GET_MONTHS, payload: allMonths});
    } catch (error) {
      return console.log(error.message);
    }
  };
};

export const getMonthsPerYear = (year) => {
  return async (dispatch) => {
    try {
      const daysByMonth = {
        0: [], // January
        1: [], // February
        2: [], // March
        3: [], // April
        4: [], // May
        5: [], // June
        6: [], // July
        7: [], // August
        8: [], // September
        9: [], // October
        10: [], // November
        11: [], // December
      };
      for (let prop in daysByMonth) {
        const response = (
          await axios.get(`${URL}/days?monthNumber=${prop}&yearNumber=${year}`)
        ).data;
        daysByMonth[prop] = response;
      }

      return dispatch({type: GET_MONTHS_PER_YEAR, payload: daysByMonth});
    } catch (error) {
      return console.log(error.message);
    }
  };
};
export const postEvent = (payload) => {
  return async function () {
    try {
      const postEvent = await axios.post(`${URL}/events`, payload);
      alert("Evento creado");
      return postEvent;
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getEvents = () => {
  return async function (dispatch) {
    try {
      const eventsData = await axios.get(`${URL}/events`);
      const eventos = eventsData.data;
      return dispatch({type: GET_EVENT, payload: eventos});
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const getDetail = (name) => {
  return async function (dispatch) {
    try {
      const detailEvents = await axios.get(`${URL}/events/name?name=${name}`);
      const detailEventsData = detailEvents.data;
      return dispatch({type: GET_DETAIL_EVENT, payload: detailEventsData});
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};
