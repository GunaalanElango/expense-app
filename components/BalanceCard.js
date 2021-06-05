import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constant/color";

const BalanceCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Your Balance Amount</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>
          <FontAwesome size={30} name="rupee" /> {props.balanceAmount}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="EARNED"
          color={Colors.darkGreen}
          onPress={props.onAddBtn}
        />
        <Button title="SPENT" color="red" onPress={props.onSubBtn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkBlue,
  },
  headerContainer: {},
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.darkBlue,
  },
  bodyContainer: {
    marginVertical: 10,
  },
  body: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.darkGreen,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default BalanceCard;
