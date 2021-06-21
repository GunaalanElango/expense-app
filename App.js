import React, { useEffect, useState } from "react";
import { StatusBar, View, ActivityIndicator } from "react-native";
import { enableScreens } from "react-native-screens";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "./screens/OnboardingScreen";
import AppNavigator from "./navigation/AppNavigator";
import Colors from "./constant/color";
import expenseReducer from "./store/reducers/expense";
import userReducer from "./store/reducers/user";

const rootReducer = combineReducers({
  expense: expenseReducer,
  user: userReducer,
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
