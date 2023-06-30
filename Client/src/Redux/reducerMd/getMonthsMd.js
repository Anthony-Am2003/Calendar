export const getMonthsMd = (state, action) => {
   return {
      ...state,
      allMonths: [...action.payload]
   }
};