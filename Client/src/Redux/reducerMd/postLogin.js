export const postLogin = (state, { payload }) => {
  return {
    ...state,
    userSession: {
      token: payload.token,
      username: payload.username,
    },
  };
};
