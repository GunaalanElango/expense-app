import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ExpenseNavigator from "./ExpenseNavigator";
import Colors from "../constant/color";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.white} />
      <ExpenseNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
