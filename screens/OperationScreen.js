import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import * as Location from "expo-location";

import { addBalanceLog, subBalanceLog } from "../store/actions/expense";
import Colors from "../constant/color";
import Styles from "../constant/styles";
import MainButton from "../components/MainButton";

const OperationBalanceScreen = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");
  const currentBalance = useSelector((state) => state.balance);
  let location = null;
  const dispatch = useDispatch();

  useEffect(() => {
    const getLatAndLong = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let locationObj = await Location.getCurrentPositionAsync();
      location = locationObj;
    };
    getLatAndLong();
  });

  const onChangeAmountHandler = (enteredNumber) => {
    if (isNaN(enteredNumber) || enteredNumber == " ") {
      return;
    }
    setEnteredAmount(enteredNumber);
  };

  const onChangeTextHandler = (enteredText) => {
    setEnteredDesc(enteredText);
  };

  const onSubmitHandler = () => {
    let enteredAmountArray = enteredAmount.split("");
    if (enteredAmountArray.includes(" ") || enteredAmountArray.includes(".")) {
      Alert.alert("Invalid", "Numbers with decimal points are not allowed", [
        { text: "Okay", style: "destructive" },
      ]);
      return;
    }
    const enteredNumber = parseInt(enteredAmount);

    const curDate = new Date();
    let log = {
      amountEntered: enteredNumber,
      operation: props.route.params.operation,
      currentBalance: currentBalance,
      dateTime: curDate.toString(),
      latitude: location ? location.coords.latitude : null,
      longitude: location ? location.coords.longitude : null,
    };

    if (props.route.params.operation == "+") {
      log.newBalance = +currentBalance + enteredNumber;
      dispatch(addBalanceLog(log));
    } else {
      log.newBalance = +currentBalance - enteredNumber;
      dispatch(subBalanceLog(log));
    }

    props.navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="enter amount"
            keyboardType="numeric"
            value={enteredAmount}
            onChangeText={onChangeAmountHandler}
            autoCompleteType="off"
            placeholderTextColor={Colors.darkViolet}
          />
        </View>

        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="description"
            value={enteredDesc}
            onChangeText={onChangeTextHandler}
            autoCompleteType="off"
            multiline={true}
            placeholderTextColor={Colors.darkViolet}
          />
        </View>

        <View style={styles.buttonContainer}>
          <MainButton
            clicked={onSubmitHandler}
            buttonStyle={styles.button}
            opacity={0.7}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </MainButton>
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
    borderColor: Colors.darkViolet,
  },
  bodyContainer: {
    marginVertical: 10,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: Colors.darkViolet,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default OperationBalanceScreen;
