export const getAllEventsMd = (state, action) => {
  return {
    ...state,
    events: [...state.events, action.payload],
  };
};
