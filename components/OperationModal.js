import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Styles from "../constant/styles";

import Colors from "../constant/color";

const OperationModal = (props) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandler = () => {
    let balance = parseInt(props.balance),
      enteredAmt = parseInt(amount),
      resultValue = 0;

    if (amount == "") {
      Alert.alert("Empty Error", "Enter the Amount", [{ text: "Okay" }]);
      return;
    }

    if (enteredAmt > balance && props.operation == "-") {
      Alert.alert(
        "Invalid Amount",
        "Entered Amount should be less than balance",
        [
          {
            text: "Okay",
          },
        ]
      );
      return;
    }

    switch (props.operation) {
      case "+":
        resultValue = balance + enteredAmt;
        break;
      case "-":
        resultValue = balance - enteredAmt;
        break;
    }

    props.onSubmit({
      operation: props.operation,
      resultValue,
      enteredAmount: enteredAmt,
      id: new Date().getTime().toString(),
      desc: description,
    });
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalBody}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder={props.text}
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
            autoFocus={true}
            autoCompleteType="off"
          />
        </View>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Enter Description"
            value={description}
            onChangeText={setDescription}
            autoCompleteType="off"
          />
        </View>
        <View>
          <Button
            title="SUBMIT"
            color={Colors.darkGreen}
            onPress={onSubmitHandler}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default OperationModal;
