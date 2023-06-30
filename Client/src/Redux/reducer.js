import { GET_DAYS } from "./action-types";
import { getDaysMd } from "./reducerMd/getDaysMd";

const initialState = {
   fullYear: [], // Contiene 12 meses.
   showedMonths: {
      prevMonth: [],
      actualMonth: [], // Trae el mes actual y prev/next para acomodar la vista.
      nextMonth: []
   }
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case GET_DAYS:
         return getDaysMd(state, action);

      default: return { ...state }
   }
};

export default reducer;