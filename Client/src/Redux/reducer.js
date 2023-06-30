import { GET_MONTHS } from "./action-types";
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
};

export default reducer;