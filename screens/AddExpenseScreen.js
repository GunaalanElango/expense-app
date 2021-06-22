import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

import { fetchExpenseData } from "../store/actions/expense";
import Colors from "../constant/color";

const AddExpenseScreen = (props) => {
  const userId = useSelector((state) => state.user.userId);
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDesc, setEnteredDesc] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={onSubmitHandler}>
            <MaterialIcons name="done" size={24} color={Colors.orange} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  const onSubmitHandler = async () => {
    try {
      if (isNaN(enteredAmount) || enteredAmount.trim() == "") {
        return Alert.alert("Amount Invalid", "Please enter a number");
      }
      if (enteredDesc.trim().length == 0) {
        return Alert.alert(
          "Description Invalid",
          "Description should not be empty and not more than 20 charactors long"
        );
      }
      setIsLoading(true);
      const response = await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/users/" +
          userId +
          "/expense",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: enteredAmount,
            description: enteredDesc,
            createdAt: Date.now(),
            updatedAt: Date.now(),
          }),
        }
      );
      dispatch(fetchExpenseData(userId));
      setIsLoading(false);
      Alert.alert("Successfull", "Expense Added Successfully", [
        {
          text: "Okay",
          onPress: () => props.navigation.navigate("ExpenseListScreen"),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{
          flex: 1,
          justifyContent: "center",
        }}
        size="large"
        color={Colors.darkViolet}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.addExpenseForm}>
        <View style={styles.inputContainer}>
          <View style={styles.inputHead}>
            <SimpleLineIcons name="info" size={24} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={enteredDesc}
            onChangeText={setEnteredDesc}
            multiline={true}
            selectionColor={Colors.black}
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputHead}>
            <FontAwesome name="rupee" size={24} color={Colors.black} />
          </View>
          <TextInput
            style={{ ...styles.input, fontSize: 20 }}
            placeholder="0.00"
            keyboardType="numeric"
            value={enteredAmount}
            onChangeText={setEnteredAmount}
            placeholderTextColor="grey"
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
    backgroundColor: Colors.white,
  },
  addExpenseForm: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  inputContainer: {
    width: "50%",
    paddingVertical: 5,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    width: "100%",
    fontSize: 15,
    color: Colors.black,
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    paddingHorizontal: 10,
  },
  inputHead: {
    width: "30%",
    paddingVertical: 10,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderBottomWidth: 3,
    borderRadius: 6,
  },
});

export default AddExpenseScreen;
