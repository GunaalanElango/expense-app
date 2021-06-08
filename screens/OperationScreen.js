import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Colors from "../constant/color";
import Styles from "../constant/styles";

const OperationBalanceScreen = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  const onChangeAmountHandler = (enteredNumber) => {
    if (isNaN(enteredNumber)) {
      return;
    }
    setEnteredAmount(enteredNumber);
  };

  const onChangeTextHandler = (enteredText) => {
    setEnteredDesc(enteredText);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View>
          <Text style={styles.header}>
            {props.route.params.operation == "+"
              ? "Add Amount"
              : "Subtract Amount"}
          </Text>
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter The Amount"
            keyboardType="numeric"
            value={enteredAmount}
            onChangeText={onChangeAmountHandler}
            autoCompleteType="off"
          />
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter Description"
            value={enteredDesc}
            onChangeText={onChangeTextHandler}
            autoCompleteType="off"
            multiline={true}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="SUBMIT"
            color="#12D566"
            onPress={() => props.navigation.navigate("HomeScreen")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
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

export default OperationBalanceScreen;
