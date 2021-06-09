import React from "react";
import { enableScreens } from "react-native-screens";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import AppNavigator from "./navigation/AppNavigator";
import expenseReducer from "./store/reducers/expense";
import { createBalanceTable, createLogTable } from "./database/db";

createBalanceTable()
  .then((result) => console.log("Balance table initialized..."))
  .catch((error) => console.log(error));

createLogTable()
  .then((result) => console.log("Log table initialized..."))
  .catch((error) => console.log(error));

const store = createStore(expenseReducer, applyMiddleware(thunk));

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
