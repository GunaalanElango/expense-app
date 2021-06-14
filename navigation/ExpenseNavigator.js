import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

import Colors from "../constant/color";
import HomeScreen from "../screens/HomeScreen";
import OperationScreen from "../screens/OperationScreen";
import LogScreen from "../screens/LogScreen";
import UpdateScreen from "../screens/UpdateScreen";

const defaultStackScreenOptions = {
  headerStyle: {
    backgroundColor: Colors.black,
  },
  headerTitleAlign: "center",
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontWeight: "bold",
  },
};

const HomeStackNavigator = createStackNavigator();
const LogStackNavigator = createStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStackNavigator.Navigator screenOptions={defaultStackScreenOptions}>
      <HomeStackNavigator.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: "ExpenseApp",
        }}
      />
      <HomeStackNavigator.Screen
        name="OperationScreen"
        component={OperationScreen}
        options={(props) => ({
          title:
            props.route.params.operation == "+"
              ? "Add Balance"
              : "Subtract Balance",
        })}
      />
      <HomeStackNavigator.Screen
        name="UpdateScreen"
        component={UpdateScreen}
        options={{
          title: "Update Expense",
        }}
      />
    </HomeStackNavigator.Navigator>
  );
};

// const LogNavigator = () => {
//   return (
//     <LogStackNavigator.Navigator screenOptions={defaultStackScreenOptions}>
//       <LogStackNavigator.Screen
//         name="LogScreen"
//         component={LogScreen}
//         options={{
//           headerTitle: "Log",
//         }}
//       />
//     </LogStackNavigator.Navigator>
//   );
// };

// const ExpenseTabNavigator = createBottomTabNavigator();

// const MainNavigator = () => {
//   return (
//     <ExpenseTabNavigator.Navigator
//       tabBarOptions={{
//         activeTintColor: Colors.black,
//       }}
//     >
//       <ExpenseTabNavigator.Screen
//         name="Home"
//         component={HomeNavigator}
//         options={{
//           tabBarIcon: (tab) => {
//             return <Entypo name="home" size={30} color={tab.color} />;
//           },
//         }}
//       />
//       <ExpenseTabNavigator.Screen
//         name="Log"
//         component={LogNavigator}
//         options={{
//           title: "All Expenses",
//           tabBarIcon: (tab) => {
//             return (
//               <MaterialIcons
//                 name="question-answer"
//                 size={30}
//                 color={tab.color}
//               />
//             );
//           },
//         }}
//       />
//     </ExpenseTabNavigator.Navigator>
//   );
// };

export default HomeNavigator;
