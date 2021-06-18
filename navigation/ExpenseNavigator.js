import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import Colors from "../constant/color";
import HomeScreen from "../screens/HomeScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import ExpenseDetailScreen from "../screens/ExpenseDetailScreen";
import UpdateExpenseScreen from "../screens/UpdateScreen";

const defaultStackScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.black,
  },
  headerTitleAlign: "left",
  headerTintColor: Colors.white,
};

const ExpenseStackNavigator = createStackNavigator();
const ExpenseListStackNavigator = createStackNavigator();

const ExpenseStackNav = () => {
  return (
    <ExpenseStackNavigator.Navigator
      mode="card"
      screenOptions={defaultStackScreenOptions}
    >
      <ExpenseStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "ExpenseApp",
        }}
      />
      <ExpenseStackNavigator.Screen
        name="AddExpenseScreen"
        component={AddExpenseScreen}
        options={{
          title: "Add Expense",
        }}
      />
    </ExpenseStackNavigator.Navigator>
  );
};

const ExpenseListStackNav = () => {
  return (
    <ExpenseListStackNavigator.Navigator
      screenOptions={defaultStackScreenOptions}
    >
      <ExpenseListStackNavigator.Screen
        name="ExpenseListScreen"
        component={ExpenseScreen}
        options={{
          title: "All Expenses",
        }}
      />
      <ExpenseListStackNavigator.Screen
        name="ExpenseDetailScreen"
        component={ExpenseDetailScreen}
        options={{
          title: "Detail",
        }}
      />
      <ExpenseListStackNavigator.Screen
        name="UpdateExpenseScreen"
        component={UpdateExpenseScreen}
        options={{
          title: "Update Expense",
        }}
      />
    </ExpenseListStackNavigator.Navigator>
  );
};

const ExpenseTabNavigator = createBottomTabNavigator();

const ExpenseTabNav = () => {
  return (
    <ExpenseTabNavigator.Navigator
      tabBarOptions={{
        activeTintColor: Colors.black,
      }}
    >
      <ExpenseTabNavigator.Screen
        name="Home"
        component={ExpenseStackNav}
        options={{
          tabBarIcon: (tab) => {
            return <Entypo name="home" size={30} color={tab.color} />;
          },
        }}
      />
      <ExpenseTabNavigator.Screen
        name="Expenses"
        component={ExpenseListStackNav}
        options={{
          title: "All Expenses",
          tabBarIcon: (tab) => {
            return (
              <MaterialIcons
                name="question-answer"
                size={30}
                color={tab.color}
              />
            );
          },
        }}
      />
    </ExpenseTabNavigator.Navigator>
  );
};

export default ExpenseTabNav;
