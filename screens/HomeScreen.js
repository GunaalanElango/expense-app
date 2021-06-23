import React, { useEffect } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { useDispatch } from "react-redux";

import Colors from "../constant/color";
import Header from "../components/Header";
import { fetchExpenseData } from "../store/actions/expense";
import { SET_USERID } from "../store/actions/user";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(fetchExpenseData());
    } catch (error) {
      Alert.alert("Error", "error in fetching your data");
    }
  }, []);

  return (
    <View style={styles.screen}>
      <Header
        title="ExpenseApp"
        islogout={true}
        logout={() => {
          dispatch({
            type: SET_USERID,
            userId: 0,
            isAuthenticated: false,
          });
        }}
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
