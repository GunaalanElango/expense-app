import {
  ADD_BALANCE_LOG,
  SUB_BALANCE_LOG,
  SET_BALANCE,
  SET_LOG,
} from "../actions/expense";

const initialState = {
  balance: 0,
  expenseLogList: [],
};

const reducer = (state = initialState, action) => {
  let len = state.expenseLogList.length;
  switch (action.type) {
    case ADD_BALANCE_LOG:
      return {
        ...state,
        balance: action.log.newBalance,
        expenseLogList:
          len == 0 ? [action.log] : [action.log, ...state.expenseLogList],
      };
    case SUB_BALANCE_LOG:
      return {
        ...state,
        balance: action.log.newBalance,
        expenseLogList:
          len == 0 ? [action.log] : [action.log, ...state.expenseLogList],
      };
    case SET_BALANCE:
      return {
        ...state,
        balance: action.balance,
      };
    case SET_LOG:
      return {
        ...state,
        expenseLogList: [...action.logList],
      };
    default:
      return state;
  }
};

export default reducer;
