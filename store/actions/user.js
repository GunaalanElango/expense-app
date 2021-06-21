import * as Application from "expo-application";
import { fetchExpenseData } from "./expense";

export const SET_USERID = "SET_USERID";

export const fetchUser = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/users?deviceId=" +
          Application.androidId
      );

      if (!response.ok) {
        throw new Error("Something went wrong in Fetch User");
      }

      const responseData = await response.json();
      dispatch({
        type: SET_USERID,
        userId: responseData.users[0].id,
        isAuthenticated: true,
      });
      dispatch(fetchExpenseData(responseData.users[0].id));
    } catch (error) {
      console.log(error);
    }
  };
};
