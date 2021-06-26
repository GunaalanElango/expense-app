export const SET_LOGGED_IN_USER = "SET_LOGGED_IN_USER";

export const setLoginUser = (user) => {
  return {
    type: SET_LOGGED_IN_USER,
    user,
  };
};
