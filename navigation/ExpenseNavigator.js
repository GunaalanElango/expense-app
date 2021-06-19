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

// const ExpenseStackNavigator = createStackNavigator();
// const ExpenseListStackNavigator = createStackNavigator();

// const ExpenseStackNav = () => {
//   return (
//     <ExpenseStackNavigator.Navigator
//       mode="card"
//       screenOptions={defaultStackScreenOptions}
//       initialRouteName="HomeScreen"
//       detachInactiveScreens={true}
//     >
//       <ExpenseStackNavigator.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{
//           title: "ExpenseApp",
//         }}
//       />
//       <ExpenseStackNavigator.Screen
//         name="AddExpenseScreen"
//         component={AddExpenseScreen}
//         options={{
//           title: "Add Expense",
//         }}
//       />
//     </ExpenseStackNavigator.Navigator>
//   );
// };

// const ExpenseListStackNav = () => {
//   return (
//     <ExpenseListStackNavigator.Navigator
//       screenOptions={defaultStackScreenOptions}
//       initialRouteName="ExpenseListScreen"
//     >
//       <ExpenseListStackNavigator.Screen
//         name="ExpenseListScreen"
//         component={ExpenseScreen}
//         options={{
//           title: "All Expenses",
//         }}
//       />
//       <ExpenseListStackNavigator.Screen
//         name="ExpenseDetailScreen"
//         component={ExpenseDetailScreen}
//         options={{
//           title: "Detail",
//         }}
//       />
//       <ExpenseListStackNavigator.Screen
//         name="UpdateExpenseScreen"
//         component={UpdateExpenseScreen}
//         options={{
//           title: "Update Expense",
//         }}
//       />
//     </ExpenseListStackNavigator.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeTabs = () => {
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
        }}
      />
      <Tab.Screen
        name="ExpenseListScreen"
        component={ExpenseScreen}
        options={{
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
        }}
      />
    </Tab.Navigator>
  );
};

const MainStack = () => {
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
        component={HomeTabs}
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

export default MainStack;
