export const getMonthsMd = (state, action) => {
   return {
      ...state,
      fullYear: [...action.payload]
   }
};