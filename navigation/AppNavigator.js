import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import OnboardingScreen from "../screens/OnboardingScreen";
import Colors from "../constant/color";
import ExpenseNavigator from "./ExpenseNavigator";

const AppNavigator = (props) => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value == null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch("true");
      } else {
        setIsFirstLaunch("false");
      }
    });
  }, []);

  const onSkipDoneHandler = () => {
    setIsFirstLaunch("false");
  };

  if (isFirstLaunch == null) {
    return null;
  } else if (isFirstLaunch == "true") {
    return <OnboardingScreen onSkipDone={onSkipDoneHandler} />;
  } else if (isFirstLaunch == "false") {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={Colors.white} />
        <ExpenseNavigator />
      </NavigationContainer>
    );
  }
};

export default AppNavigator;
