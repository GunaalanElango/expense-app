import { SET_USERID } from "../actions/user";

const initalState = {
  userId: 0,
  isAuthenticated: false,
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_USERID:
      return {
        ...state,
        userId: action.userId,
        isAuthenticated: action.isAuthenticated,
      };
    default:
      return state;
  }
};

export default reducer;
