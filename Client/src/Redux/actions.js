<<<<<<< HEAD
import axios from "axios";

import {
  GET_MONTHS,
  GET_YEARS,
  GET_DETAIL_DAY,
  POST_EVENT,
  GET_DAYS,
} from "./action-types";
=======
import axios from 'axios';

import { GET_MONTHS, GET_YEARS, GET_DETAIL_DAY, POST_EVENT, GET_DAYS } from "./action-types";
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8

const URL = "http://localhost:7286";

export const getDays = (monthNumber, yearNumber) => {
<<<<<<< HEAD
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
=======
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`${URL}/days?monthNumber=${monthNumber}&yearNumber=${yearNumber}`);

            return dispatch({ type: GET_MONTHS, payload: data })
        } catch (error) {
            return console.log(error)
        }
    }
}

export const getMonth = ()=>{
    return async(dispatch)=>{
        try {
            const { data } = await axios.get(`${URL}/months`)

            return dispatch({ type: GET_MONTHS, payload: data })
        } catch (error) {
            return console.log(error.message)
        }
    }
}
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8
