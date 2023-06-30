import { GET_MONTHS } from "./action-types";

const initialState = {
  meses: [],
  dia: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHS:
      return console.log("first");
    default:
      return { ...state };
  }
};

export default reducer;
