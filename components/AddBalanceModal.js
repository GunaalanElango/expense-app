import React, { useState } from "react";
import { StyleSheet, View, Text, Modal, TextInput, Button } from "react-native";
import Styles from "../constant/styles";

import Colors from "../constant/color";

const AddBalanceModal = (props) => {
  const [enteredBalance, setEnteredBalance] = useState("");

  const onPressHandler = () => {
    props.addBalance(enteredBalance);
    setEnteredBalance("");
  };

  return (
    <Modal visible={props.modalVisible} animationType="slide">
      <View style={styles.modalBody}>
        <View style={Styles.inputContainer}>
          <TextInput
            style={Styles.input}
            placeholder="Add Initial Balance"
            keyboardType="numeric"
            value={enteredBalance}
            onChangeText={setEnteredBalance}
            autoFocus={true}
            autoCompleteType="off"
          />
        </View>
        <View>
          <Button
            title="ADD"
            onPress={onPressHandler}
            color={Colors.darkGreen}
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

export default AddBalanceModal;
