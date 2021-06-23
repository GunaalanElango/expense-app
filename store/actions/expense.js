export const SET_EXPENSE_LIST = "SET_EXPENSE_LIST";

export const fetchExpenseData = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(
        `https://60cb210521337e0017e43e34.mockapi.io/users/${
          getState().user.userId
        }/expense`
      );

      if (!response.ok) {
        throw new Error("Something went wrong in fetch expense data");
      }

      const responseData = await response.json();
      dispatch({
        type: SET_EXPENSE_LIST,
        data: responseData.data,
      });
    } catch (error) {
      throw error;
    }
  };
};
