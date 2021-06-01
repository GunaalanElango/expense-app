import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, Button, FlatList } from "react-native";

import ExpenseItem from "../components/ExpenseItem";
import Colors from "../constant/color";

const HomeScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.cardHeading}>Total Balance</Text>
          <Text style={styles.amount}>
            <FontAwesome size={27} name="rupee" /> {props.balanceAmount}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Income"
            color={Colors.lightFadeBlue}
            onPress={props.incomeClick}
          />
          <Button
            title="Spent"
            color={Colors.darkFadeBlue}
            onPress={props.spentClick}
          />
        </View>
      </View>
      <FlatList
        data={props.expenseList}
        keyExtractor={(item) => item.id}
        renderItem={(value) => (
          <ExpenseItem
            operation={value.item.operation}
            resultValue={value.item.resultValue}
            amount={value.item.enteredAmount}
            desc={value.item.desc}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 20,
    paddingHorizontal: 30,
    width: "80%",
    height: "30%",
    borderColor: Colors.lightGrey,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  amount: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.darkGreen,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  cardHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.darkBlue,
    marginVertical: 10,
  },
});

export default HomeScreen;
