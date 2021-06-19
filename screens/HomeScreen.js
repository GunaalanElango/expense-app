import React, { useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import { useDispatch } from "react-redux";

import { fetchExpenseData } from "../store/actions/expense";
import Colors from "../constant/color";
import Header from "../components/Header";
// import { useIsFocused } from "@react-navigation/native";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseData());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Header title="ExpenseApp" />
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
