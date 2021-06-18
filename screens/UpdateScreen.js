import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";

// import Styles from "../constant/styles";
import Colors from "../constant/color";
import MainButton from "../components/MainButton";
import { editLog } from "../store/actions/expense";

const UpdateScreen = (props) => {
  const [enteredAmount, setEnteredAmount] = useState("");
  const [operation, setOperation] = useState("");
  const expenses = useSelector((state) => state.expenseLogList);

  const dispatch = useDispatch();

  const onChangeAmountHandler = (enteredNumber) => {
    if (isNaN(enteredNumber) || enteredNumber == " ") {
      return;
    }
    setEnteredAmount(enteredNumber);
  };

  const onChangeOperationHandler = (enteredOperation) => {
    if (
      enteredOperation == "+" ||
      enteredOperation == "-" ||
      enteredOperation == ""
    ) {
      setOperation(enteredOperation);
    }
  };

  const selectedExpense = expenses.find(
    (expense, index) => index == props.route.params.index
  );

  const onSubmitHandler = () => {
    dispatch(
      editLog(
        selectedExpense.id,
        props.route.params.index,
        operation == "" ? selectedExpense.operation : operation,
        enteredAmount == "" ? selectedExpense.enteredAmount : enteredAmount
      )
    );
    props.navigation.replace("HomeScreen");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.cardContainer}>
        <View style={Styles.inputContainer}>
          <Text>#{selectedExpense.id}</Text>
        </View>

        <View style={Styles.inputContainer}>
          <Text>Amount</Text>
          <TextInput
            style={Styles.input}
            placeholder={selectedExpense.enteredAmount.toString()}
            keyboardType="numeric"
            value={enteredAmount}
            onChangeText={onChangeAmountHandler}
            placeholderTextColor={Colors.darkViolet}
          />
        </View>

        <View style={Styles.inputContainer}>
          <Text>Operation</Text>
          <TextInput
            style={Styles.input}
            placeholder={selectedExpense.operation}
            value={operation}
            onChangeText={onChangeOperationHandler}
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

export default UpdateScreen;
