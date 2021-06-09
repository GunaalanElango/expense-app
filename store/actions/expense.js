export const ADD_BALANCE_LOG = "ADD_BALANCE_LOG";
export const SUB_BALANCE_LOG = "SUB_BALANCE_LOG";

export const addBalanceLog = (log) => {
  return { type: ADD_BALANCE_LOG, log };
};

export const subBalanceLog = (log) => {
  return { type: SUB_BALANCE_LOG, log };
};
