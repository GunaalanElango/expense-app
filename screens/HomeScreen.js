import React, { useEffect } from "react";
import { StyleSheet, View, Button, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { fetchExpenseData } from "../store/actions/expense";
import Colors from "../constant/color";
import Header from "../components/Header";
import AuthScreen from "../screens/AuthScreen";
import { SET_USERID } from "../store/actions/user";

const HomeScreen = (props) => {
  const { isAuthenticated, userId } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (isAuthenticated) {
        dispatch(fetchExpenseData(userId));
      }
    } catch (error) {
      console.log(error);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    props.navigation.setOptions({
      tabBarVisible: isAuthenticated ? true : false,
    });
  });

  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header
        title="ExpenseApp"
        logout={() =>
          dispatch({ type: SET_USERID, userId: 0, isAuthenticated: false })
        }
        islogout={true}
      />
      <View style={styles.button}>
        <Button
          title="Add Expense"
          onPress={() => props.navigation.navigate("AddExpenseScreen")}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default HomeScreen;
