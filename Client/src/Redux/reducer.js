import { GET_MONTHS } from "./action-types";
<<<<<<< HEAD

const initialState = {
  meses: [],
  dia: [],
=======
import { getMonthRd } from "./reducerMd/getMonth";

const initialState = {
   meses: [],
   dia: [],
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_MONTHS:
         return getMonthRd(state, action);
      default: return { ...state }
   }
>>>>>>> bec4343096aa607c4346d430a79308223d1263c8
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
