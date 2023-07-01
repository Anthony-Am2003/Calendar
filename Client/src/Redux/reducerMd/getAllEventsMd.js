export const getAllEventsMd = (state, action) => {
  return {
    ...state,
    events: action.payload,
  };
};
