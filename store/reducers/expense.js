import { ADD_BALANCE_LOG, SUB_BALANCE_LOG } from "../actions/expense";

const initialState = {
  balance: 0,
  expenseLogList: [{}],
};

const reducer = (state = initialState, action) => {
  let len = state.expenseLogList.length;
  switch (action.type) {
    case ADD_BALANCE_LOG:
      return {
        ...state,
        balance: action.log.newBalance,
        expenseLogList:
          len == 1 ? [action.log] : [...state.expenseLogList, action.log],
      };
    case SUB_BALANCE_LOG:
      return {
        ...state,
        balance: action.log.newBalance,
        expenseLogList:
          len == 1 ? [action.log] : [...state.expenseLogList, action.log],
      };
    default:
      return state;
  }
};

export default reducer;
