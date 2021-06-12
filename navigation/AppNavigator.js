import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import Colors from "../constant/color";
import ExpenseNavigator from "./ExpenseNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} />
      <ExpenseNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
