import React, { useEffect, useState } from "react";
import * as Application from "expo-application";
import * as SplashScreen from "expo-splash-screen";
import * as Location from "expo-location";
import { enableScreens } from "react-native-screens";

import AppNavigator from "./navigator/AppNavigator";
import { createStore } from "redux";
import { Provider } from "react-redux";
import expenseReducer from "./store/reducers/expense";

const store = createStore(expenseReducer);

enableScreens();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
