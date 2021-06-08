export const ADD_BALANCE = "ADD_BALANCE";
export const SUBTRACT_BALANCE = "SUBTRACT_BALANCE";

export const addBalance = (enteredBalance) => {
  return { type: ADD_BALANCE, enteredBalance };
};

export const subtractBalance = (enteredBalance) => {
  return { type: SUBTRACT_BALANCE, enteredBalance };
};
