export const login = (state, { payload }) => {
  return {
    ...state,
    userSession: {
      id: payload.id,
      username: payload.username,
      token: payload.token,
    },
  };
};
