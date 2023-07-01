export const postLogin = (state, { payload }) => {
  return {
    ...state,
    userSession: {
      id: payload,
      username: payload,
      token: payload,
    },
  };
};
