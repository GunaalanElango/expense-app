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
import getDateFunction from "../util/getDateByTimestamp";
import Header from "../components/Header";

const ExpenseScreen = (props) => {
  const expenseData = useSelector((state) => state.expenses);

  // useEffect(() => {
  //   props.navigation.addListener("focus", loadExpenseData);

  //   return () => {
  //     props.navigation.removeListener("focus", loadExpenseData);
  //   };
  // });

  const onClickHandler = (index) => {
    props.navigation.navigate("ExpenseDetailScreen", {
      index: index,
    });
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
            onPress={() => props.navigation.navigate("AddExpenseScreen")}
            color={Colors.black}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Header title="All Expenses" />
      <View style={styles.screenContent}>
        <FlatList
          style={styles.list}
          data={expenseData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <TouchableNativeFeedback onPress={() => onClickHandler(index)}>
                <View style={styles.listItem}>
                  <View style={styles.index}>
                    <Text style={styles.text}>
                      {expenseData.length - index}
                    </Text>
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
                    <Text>{getDateFunction(item.createdAt)}</Text>
                  </View>
                </View>
              </TouchableNativeFeedback>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
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
