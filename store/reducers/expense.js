import { ADD_BALANCE, SUBTRACT_BALANCE } from "../actions/expense";

const initialState = {
  balance: 0,
  expenseLogList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BALANCE:
      return {
        ...state,
        balance: state.balance + action.enteredBalance,
      };
    case SUBTRACT_BALANCE:
      return {
        ...state,
        balance: state.balance - action.enteredBalance,
      };
    default:
      return state;
  }
};

export default reducer;
