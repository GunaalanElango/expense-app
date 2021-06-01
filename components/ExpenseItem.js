import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constant/color";

const ExpenseItem = (props) => {
  return (
    <View style={styles.listContainer}>
      {props.operation == "+" ? (
        <Text style={styles.text}>Amount Added = {props.amount}</Text>
      ) : (
        <Text style={styles.text}>Amount Spent = {props.amount}</Text>
      )}
      <Text style={styles.text}>Current Balance = {props.resultValue}</Text>
      <Text style={styles.text}>Description: {props.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: Colors.lightGrey,
    marginVertical: 10,
  },
  text: {
    fontSize: 15,
    color: Colors.darkBlue,
    marginVertical: 5,
  },
});

export default ExpenseItem;
