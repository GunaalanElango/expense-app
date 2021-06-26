import { SET_LOGGED_IN_USER } from "../actions/auth";

const initalState = {
  user: {
    email: "elangogunaalan@gmail.com",
    name: "Gunaalan",
  },
  isAuthenticated: true,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_USER:
      return {
        ...state,
        user: action.user,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};

export default reducer;
