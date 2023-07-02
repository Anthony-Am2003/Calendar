export const getEventDetailMd = (state, action) => {
  return {
    ...state,
    eventDetail: action.payload,
  };
};
