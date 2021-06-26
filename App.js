import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "./screens/OnboardingScreen";
import AppNavigator from "./navigation/AppNavigator";
import Colors from "./constant/color";
import expenseReducer from "./store/reducers/expenses";
import authReducer from "./store/reducers/auth";
import userReducer from "./store/reducers/users";
import groupReducer from "./store/reducers/groups";

const rootReducer = combineReducers({
  users: userReducer,
  expense: expenseReducer,
  auth: authReducer,
  groups: groupReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

enableScreens();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch) {
    return <OnboardingScreen onDone={() => setIsFirstLaunch(false)} />;
  } else {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    );
  }
}
