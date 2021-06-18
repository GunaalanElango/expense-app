export const SET_EXPENSE_LIST = "SET_EXPENSE_LIST";

export const fetchExpenseData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/expense"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong");
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

// import {
//   selectBalance,
//   insertOrUpdateBalance,
//   insertLog,
//   selectLog,
//   deleteLog,
//   updateLog,
// } from "../../database/db";

// export const ADD_BALANCE_LOG = "ADD_BALANCE_LOG";
// export const SUB_BALANCE_LOG = "SUB_BALANCE_LOG";
// export const SET_BALANCE = "SET_BALANCE";
// export const SET_LOG = "SET_LOG";
// export const DELETE_LOG = "DELETE_LOG";
// export const UPDATE_LOG = "UPDATE_LOG";

// export const addBalanceLog = (log) => {
//   return async (dispatch) => {
//     try {
//       const insertOrUpdateResult = await insertOrUpdateBalance(
//         log.newBalance,
//         log.deviceId
//       );
//       const insertLogResult = await insertLog(log);
//       dispatch({
//         type: ADD_BALANCE_LOG,
//         log,
//         insertId: insertLogResult.insertId,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const subBalanceLog = (log) => {
//   return async (dispatch) => {
//     try {
//       const insertOrUpdateResult = await insertOrUpdateBalance(
//         log.newBalance,
//         log.deviceId
//       );
//       const insertLogResult = await insertLog(log);
//       dispatch({
//         type: SUB_BALANCE_LOG,
//         log,
//         insertId: insertLogResult.insertId,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// const setBalance = (balance) => {
//   return { type: SET_BALANCE, balance };
// };

// export const fetchBalance = (deviceId) => {
//   return async (dispatch) => {
//     try {
//       const result = await selectBalance(deviceId);
//       if (result.rows.length == 0) {
//         dispatch(setBalance(0));
//       } else {
//         dispatch(setBalance(result.rows._array[0].balance));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const setLog = (logList) => {
//   return { type: SET_LOG, logList };
// };

// export const fetchLog = (deviceId) => {
//   return async (dispatch) => {
//     try {
//       const result = await selectLog(deviceId);
//       if (result.rows.length == 0) {
//         dispatch(setLog([]));
//       } else {
//         dispatch(setLog(result.rows._array));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const removeList = (index) => {
//   return { type: DELETE_LOG, index };
// };

// export const removeLog = (id, index) => {
//   return async (dispatch) => {
//     try {
//       dispatch(removeList(index));
//       const result = await deleteLog(id);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

// export const editLog = (id, index, operation, enteredAmount) => {
//   return async (dispatch) => {
//     try {
//       const update = await updateLog(id, operation, enteredAmount);
//       console.log(update);
//       dispatch({
//         type: UPDATE_LOG,
//         index,
//         operation,
//         enteredAmount,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };
