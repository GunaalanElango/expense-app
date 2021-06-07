import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constant/color";

const ExpenseItem = (props) => {
  return props.operation == "+" ? (
    <View style={styles.add}>
      <Text style={{ color: "green" }}>Amount Added +{props.amount}</Text>
      <Text style={{ color: "green" }}>
        Previous Balance {props.previousBalance}
      </Text>
      <Text style={{ color: "green" }}>result {props.currentBalance}</Text>
    </View>
  ) : (
    <View style={styles.sub}>
      <Text style={{ color: "red" }}>Amount detected -{props.amount}</Text>
      <Text style={{ color: "red" }}>
        Previous Balance {props.previousBalance}
      </Text>
      <Text style={{ color: "red" }}>result {props.currentBalance}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  add: {
    width: "90%",
    paddingVertical: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 5,
    backgroundColor: "#D2E6D2",
    alignItems: "center",
  },
  sub: {
    width: "90%",
    paddingVertical: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 5,
    backgroundColor: "#E4C8CB",
    alignItems: "center",
  },
});

export default ExpenseItem;
