import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import Colors from "../constant/color";
import HomeScreen from "../screens/HomeScreen";
import AddExpenseScreen from "../screens/AddExpenseScreen";
import ExpenseScreen from "../screens/ExpenseScreen";
import ExpenseDetailScreen from "../screens/ExpenseDetailScreen";
import UpdateExpenseScreen from "../screens/UpdateScreen";
import FriendScreen from "../screens/FriendScreen";
import RegisterScreen from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTitleAlign: "left",
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ title: "Register" }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ title: "Login" }}
      />
    </Stack.Navigator>
  );
};

const ExpenseTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.black,
      }}
    >
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: (tab) => {
            return <Entypo name="home" size={30} color={tab.color} />;
          },
          title: "Home",
        }}
      />
      <Tab.Screen
        name="ExpenseListScreen"
        component={ExpenseScreen}
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
      <Tab.Screen
        name="FriendScreen"
        component={FriendScreen}
        options={{
          tabBarIcon: (tab) => {
            return <FontAwesome5 name="user-alt" size={30} color={tab.color} />;
          },
          title: "Friends",
        }}
      />
    </Tab.Navigator>
  );
};

const ExpenseStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.black,
        },
        headerTitleAlign: "left",
        headerTintColor: Colors.white,
      }}
    >
      <Stack.Screen
        name="Home"
        component={ExpenseTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AddExpenseScreen"
        component={AddExpenseScreen}
        options={{ title: "Add Expense" }}
      />
      <Stack.Screen
        name="ExpenseDetailScreen"
        component={ExpenseDetailScreen}
        options={{ title: "Detail" }}
      />
      <Stack.Screen
        name="UpdateExpenseScreen"
        component={UpdateExpenseScreen}
        options={{ title: "Update Expense" }}
      />
    </Stack.Navigator>
  );
};

export default ExpenseStackNavigator;
