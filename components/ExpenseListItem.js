import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import Colors from "../constant/color";

const ExpenseListItem = (props) => {
  let expenseListItem =
    props.expenses.length == 0
      ? null
      : props.expenses.map((expense, index) => {
          return (
            <View style={styles.listItem} key={index.toString()}>
              <View style={styles.listText}>
                <Text style={styles.texthead}>
                  #{props.expenses.length - index}
                </Text>
                <Text style={styles.text}>
                  {expense.operation == "+" ? (
                    <Text>Amount Added : </Text>
                  ) : (
                    <Text>Amount Detected : </Text>
                  )}
                  {expense.enteredAmount}
                </Text>
                <Text style={styles.text}>
                  Previous Balance : {expense.currentBalance}
                </Text>
                <Text style={styles.text}>
                  New Balance : {expense.newBalance}
                </Text>
                <Text style={styles.text}>Latitude : {expense.latitude}</Text>
                <Text style={styles.text}>Longitude : {expense.longitude}</Text>
              </View>
            </View>
          );
        });

  return (
    <View style={styles.expenseList}>
      <ScrollView>{expenseListItem}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseList: {
    flex: 1,
    width: "90%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkViolet,
    marginVertical: 10,
  },
  listText: {
    color: Colors.darkViolet,
    flexDirection: "column",
  },
  listItem: {
    backgroundColor: Colors.violet,
    marginVertical: 8,
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  text: {
    color: Colors.darkViolet,
    fontSize: 13,
  },
  texthead: {
    color: Colors.darkViolet,
    fontSize: 13,
    fontWeight: "bold",
  },
});

export default ExpenseListItem;
