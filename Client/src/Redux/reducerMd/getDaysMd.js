export const getDaysMd = (state, action) => {
  return {
    ...state,
    showedMonths: {
      prevMonth: [...action.payload.prevMonth],
      actualMonth: [...action.payload.actualMonth],
      nextMonth: [...action.payload.nextMonth],
    },
    currentYear: action.payload.yearNumber,
  };
};
