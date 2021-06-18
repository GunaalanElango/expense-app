import React, { useEffect } from "react";

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

import { fetchExpenseData } from "../store/actions/expense";
import getDateByEpoch from "../util/getDateByTimestamp";
import Colors from "../constant/color";

const ExpenseDetailScreen = (props) => {
  const expenses = useSelector((state) => state.expenses);

  const expense = expenses.find(
    (expense, index) => props.route.params.id == index
  );

  const dispatch = useDispatch();

  const onDeleteHandler = async () => {
    const response = await fetch(
      "https://60cb210521337e0017e43e34.mockapi.io/expense/" + expense.id,
      {
        method: "DELETE",
      }
    );
    const responseData = await response.json();
    dispatch(fetchExpenseData());
    props.navigation.navigate("ExpenseListScreen");
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
          <TouchableOpacity>
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
          You Added on {getDateByEpoch(expense.time)}
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
    paddingLeft: "20%",
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
});

export default ExpenseDetailScreen;
