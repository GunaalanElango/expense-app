import React from "react";

import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const ExpenseDetailScreen = (props) => {
  const expenses = useSelector((state) => state.expenses);

  const expense = expenses.find(
    (expense, index) => props.route.params.id == index
  );

  return (
    <View style={styles.screen}>
      <Text>ExpenseDetailScreen</Text>
      <Text>{expense.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ExpenseDetailScreen;
