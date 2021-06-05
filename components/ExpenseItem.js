import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constant/color";

const ExpenseItem = (props) => {
  return (
    <View>
      <Text>
        {props.previousBalance} {props.operation} {props.amount} ={" "}
        {props.currentBalance}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  // listContainer: {
  //   flex: 1,
  // },
  // listContainer: {
  //   width: "100%",
  //   alignItems: "center",
  //   paddingVertical: 10,
  //   paddingHorizontal: 30,
  //   backgroundColor: "#F2F3F4",
  //   marginVertical: 10,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: Colors.lightGrey,
  // },
  // textAdd: {
  //   fontSize: 15,
  //   color: "green",
  //   marginVertical: 5,
  // },
  // textSpent: {
  //   fontSize: 15,
  //   color: "red",
  //   marginVertical: 5,
  // },
  // text: {
  //   fontSize: 15,
  //   color: Colors.darkBlue,
  //   marginVertical: 5,
  // },
});

export default ExpenseItem;
