import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import ExpenseNavigator from "./ExpenseNavigator";

const AppNavigator = (props) => {
  return (
    <NavigationContainer>
      <ExpenseNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;
