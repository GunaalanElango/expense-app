import { ADD_USER } from "../actions/users";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      if (state.users.length == 0)
        return {
          ...state,
          users: [action.user],
        };
      else
        return {
          ...state,
          users: [...state.users, action.user],
        };

    default:
      return state;
  }
};

export default reducer;
