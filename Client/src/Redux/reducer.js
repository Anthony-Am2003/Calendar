import {
  GET_DAYS,
  GET_EVENT,
  GET_MONTHS,
  GET_MONTHS_PER_YEAR,
  POST_EVENT,
  LOGIN,
  LOGOUT,
  GET_DETAIL_EVENT,
} from "./action-types";
import {getAllEventsMd} from "./reducerMd/getAllEventsMd";
import {getDaysMd} from "./reducerMd/getDaysMd";
import {getMonthsMd} from "./reducerMd/getMonthsMd";
import {getMonthsPerYearMd} from "./reducerMd/getMonthsPerYearMd";
import {postEvent} from "./reducerMd/postEvent";
import {login} from "./reducerMd/login";
import {logout} from "./reducerMd/logout";
import {getEventDetailMd} from "./reducerMd/getDetailEvMd";

const initialState = {
  allMonths: [], // Contiene 12 meses.
  showedMonths: {
    prevMonth: [],
    actualMonth: [], // Trae el mes actual y prev/next para acomodar la vista.
    nextMonth: [],
  },
  monthsPerYear: {
    year: undefined,
    january: [],
    february: [],
    march: [],
    april: [],
    may: [],
    june: [],
    july: [],
    august: [],
    september: [],
    october: [],
    november: [],
    december: [],
  },
  currentYear: "",
  events: [],
  eventDetail: [],
  userSession: {
    id: "",
    username: "",
    token: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DAYS:
      return getDaysMd(state, action);
    case GET_MONTHS:
      return getMonthsMd(state, action);
    case GET_MONTHS_PER_YEAR:
      return getMonthsPerYearMd(state, action);
    case GET_EVENT:
      return getAllEventsMd(state, action);
    case POST_EVENT:
      return postEvent(state, action);
    case GET_DETAIL_EVENT:
      return getEventDetailMd(state, action);
    case LOGIN:
      return login(state, action);
    case LOGOUT:
      return logout(state, action);

    default:
      return {...state};
  }
};

export default reducer;
