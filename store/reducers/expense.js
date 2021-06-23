import { SET_EXPENSE_LIST } from "../actions/expense";

const initalState = {
  expenses: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_EXPENSE_LIST:
      return {
        ...state,
        expenses: action.data.reverse(),
      };
    default:
      return state;
  }
};

export default reducer;
