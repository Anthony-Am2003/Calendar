import axios from "axios";

import {
  GET_DAYS,
  GET_MONTHS,
  GET_YEARS,
  GET_DETAIL_DAY,
  POST_EVENT,
} from "./action-types";

const URL = "http://localhost:7286";

export const getDays = (monthNumber, yearNumber) => {
  return async (dispatch) => {
    try {
      const months = {
        prevMonth: [],
        actualMonth: [],
        nextMonth: [],
      };

      const actualMonth = (
        await axios.get(
          `${URL}/days?monthNumber=${monthNumber}&yearNumber=${yearNumber}`
        )
      ).data;
      months.actualMonth = [...actualMonth];

      // 0 es enero y 11 es diciembre
      if (monthNumber === 0) {
        const prevMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${monthNumber + 11}&yearNumber=${
              yearNumber - 1
            }` // Obtengo diciembre del año anterior
          )
        ).data;
        months.prevMonth = [...prevMonth];
      } else {
        const prevMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${
              monthNumber - 1
            }&yearNumber=${yearNumber}`
          )
        ).data;
        months.prevMonth = [...prevMonth];
      }

      if (monthNumber === 11) {
        const nextMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${monthNumber - 11}&yearNumber=${
              yearNumber + 1
            }` // Obtengo enero del año siguiente
          )
        ).data;
        months.nextMonth = [...nextMonth];
      } else {
        const nextMonth = (
          await axios.get(
            `${URL}/days?monthNumber=${
              monthNumber + 1
            }&yearNumber=${yearNumber}`
          )
        ).data;
        months.nextMonth = [...nextMonth];
      }

      return dispatch({type: GET_DAYS, payload: months});
    } catch (error) {
      return console.log(error);
    }
  };
};

export const getMonth = () => {
  return async (dispatch) => {
    try {
      const {data} = await axios.get(`${URL}/months`);

      return dispatch({type: GET_MONTHS, payload: data});
    } catch (error) {
      return console.log(error.message);
    }
  };
};
