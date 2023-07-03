export const logout = (state, { payload }) => {
  return {
    ...state,
    userSession: {
      id: payload,
      username: payload,
      token: payload,
    },
  };
};
