import React, { useEffect } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { fetchExpenseData } from "../store/actions/expense";
import getDateByEpoch from "../util/getDateByTimestamp";
import Colors from "../constant/color";

const ExpenseDetailScreen = (props) => {
  const expenses = useSelector((state) => state.expense.expenses);

  const expense = expenses.find(
    (expense, index) => props.route.params.index == index
  );

  const dispatch = useDispatch();

  const onDeleteHandler = async () => {
    await fetch(
      "https://60cb210521337e0017e43e34.mockapi.io/expense/" + expense.id,
      {
        method: "DELETE",
      }
    );
    dispatch(fetchExpenseData());
    props.navigation.navigate("ExpenseListScreen");
  };

  const onUpdateHandler = async () => {
    props.navigation.navigate("UpdateExpenseScreen", {
      index: props.route.params.index,
    });
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <TouchableOpacity onPress={onUpdateHandler}>
            <MaterialIcons name="edit" size={24} color={Colors.orange} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginLeft: 30 }}
            onPress={onDeleteHandler}
          >
            <MaterialIcons name="delete" size={24} color={Colors.orange} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  if (expense) {
    return (
      <View style={styles.screen}>
        <Text style={styles.heading}>{expense.description}</Text>
        <Text style={styles.amount}>
          <FontAwesome name="rupee" size={30} color={Colors.black} />{" "}
          {expense.amount}
        </Text>
        <Text style={styles.time}>
          Last updated on {getDateByEpoch(expense.updatedAt)}
        </Text>
        <Text style={styles.time}>
          You added on {getDateByEpoch(expense.createdAt)}
        </Text>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: "20%",
  },
  heading: {
    fontSize: 25,
    color: Colors.orange,
    fontWeight: "bold",
    marginVertical: 10,
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
  },
  time: {
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
    marginVertical: 10,
  },
});

export default ExpenseDetailScreen;
