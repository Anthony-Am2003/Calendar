export const getMonthsPerYearMd = (state, action) => {
   return {
      ...state,
      monthsPerYear: {
         january: [...action.payload[0]],
         february: [...action.payload[1]],
         march: [...action.payload[2]],
         april: [...action.payload[3]],
         may: [...action.payload[4]],
         june: [...action.payload[5]],
         july: [...action.payload[6]],
         august: [...action.payload[7]],
         september: [...action.payload[8]],
         october: [...action.payload[9]],
         november: [...action.payload[10]],
         december: [...action.payload[11]]
      }
   }
};