import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ExpenseNavigator from "./ExpenseNavigator";
import Colors from "../constant/color";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { OnboardingNavigator } from "../navigator/ExpenseNavigator";
import OnboardingScreen from "../screens/OnboardingScreen";

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
