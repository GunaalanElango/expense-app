import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Colors from "../constant/color";
import Styles from "../constant/styles";

const OperationBalanceCard = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const onChangeTextHandler = (enteredNumber) => {
    if (isNaN(enteredNumber) || enteredNumber == ' ') {
      return;
    }
    setEnteredValue(enteredNumber);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          {props.operation == "+" ? "Add Amount" : "Subtract Amount"}
        </Text>
      </View>

      <View style={Styles.inputContainer}>
        <TextInput
          style={Styles.input}
          placeholder="Enter The Amount"
          keyboardType="numeric"
          value={enteredValue}
          onChangeText={onChangeTextHandler}
          autoCompleteType="off"
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="BACK" color={Colors.darkBlue} onPress={props.onBack} />
        <Button
          title="SUBMIT"
          color={Colors.darkGreen}
          onPress={() => props.onSubmit(enteredValue, props.operation)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: Colors.white,
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
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default OperationBalanceCard;
