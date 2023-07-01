export const postLogin = (state, { payload }) => {
  return {
    ...state,
    userSession: {
      token: payload,
      username: payload,
    },
  };
};
