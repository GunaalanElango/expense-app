import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import ExpenseNavigator, { AuthNavigator } from "./ExpenseNavigator";

const AppNavigator = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <NavigationContainer>
      {isAuthenticated ? <ExpenseNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
