import React from "react";

import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableNativeFeedback,
  ActivityIndicator,
  Button,
} from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../constant/color";

const ExpenseScreen = (props) => {
  const expenseData = useSelector((state) => state.expenses);

  // useEffect(() => {
  //   props.navigation.addListener("focus", loadExpenseData);

  //   return () => {
  //     props.navigation.removeListener("focus", loadExpenseData);
  //   };
  // });

  const onClickHandler = (id) => {
    props.navigation.navigate("ExpenseDetailScreen", {
      id: id,
    });
  };

  const getDateFunction = (timestamp) => {
    const date = new Date(timestamp);

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    const a = date.getHours() >= 12 ? "PM" : "AM";

    let isToday = false;
    const todayDate = new Date();
    if (
      day == todayDate.getDate() &&
      month == todayDate.getMonth() &&
      year == todayDate.getFullYear()
    ) {
      isToday = true;
    }

    if (isToday) {
      return `Today, ${hours}:${minutes} ${a}`;
    }

    return `${day}/${month}/${year}, ${hours}:${minutes} ${a}`;
  };

  if (expenseData.length == 0) {
    return (
      <View style={styles.screen}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20, color: Colors.orange }}>
            Your Expenses is Empty!
          </Text>
          <Button
            title="Add Your Expense Here"
            onPress={() => props.navigation.navigate("HomeScreen")}
            color={Colors.black}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.list}
        data={expenseData}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <TouchableNativeFeedback onPress={() => onClickHandler(index)}>
              <View style={styles.listItem}>
                <View style={styles.index}>
                  <Text style={styles.text}>{item.id}</Text>
                </View>
                <View style={styles.body}>
                  <Text>
                    You added "
                    <Text style={styles.highlight}>{item.description}</Text>".
                  </Text>
                  <Text>
                    You Spent{" "}
                    <FontAwesome name="rupee" size={13} color={Colors.red} />
                    <Text style={{ color: Colors.red }}>{item.amount}</Text>
                  </Text>
                  <Text>{getDateFunction(item.time)}</Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    flex: 1,
    width: "100%",
  },
  listItem: {
    fontSize: 13,
    padding: 10,
    backgroundColor: Colors.white,
    flexDirection: "row",
  },
  index: {
    width: "13%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.violet,
    borderColor: Colors.darkViolet,
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.darkViolet,
  },
  body: {
    paddingHorizontal: 10,
  },
  highlight: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default ExpenseScreen;
