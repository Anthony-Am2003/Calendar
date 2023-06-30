import axios from "axios";

import {
  GET_MONTHS,
  GET_YEARS,
  GET_DETAIL_DAY,
  POST_EVENT,
  GET_DAYS,
} from "./action-types";

const URL = "http://localhost:7286";

export const getDays = (monthNumber, yearNumber) => {
  return async (dispatch) => {
    try {
      const data = await axios(
        `${URL}/days?monthNumber=${monthNumber}&yearNumber=${yearNumber}`
      );

      console.log(data);

      return dispatch({ type: GET_MONTHS, payload: data });
    } catch (error) {
      return console.log(error);
    }
  };
};

export const getMonth = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/months`);

      console.log(data);

      return dispatch({ type: GET_MONTHS, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
};
