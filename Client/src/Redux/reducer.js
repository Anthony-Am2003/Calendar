import { GET_DAYS, GET_MONTHS } from "./action-types";
import { getDaysMd } from "./reducerMd/getDaysMd";
import { getMonthsMd } from "./reducerMd/getMonthsMd";

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

      case GET_MONTHS:
         return getMonthsMd(state, action);

      default: return { ...state };
   }
};

export default reducer;