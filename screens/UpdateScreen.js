import React, { useState, useEffect } from "react";
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

const UpdateExpenseScreen = (props) => {
  const expenses = useSelector((state) => state.expenses);

  const expense = expenses.find(
    (expense, index) => index == props.route.params.index
  );

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const [enteredAmount, setEnteredAmount] = useState(
    expense ? expense.amount : ""
  );
  const [enteredDesc, setEnteredDesc] = useState(
    expense ? expense.description : ""
  );

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
          "Description should not be empty"
        );
      }
      setIsLoading(true);
      await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/expense/" + expense.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: enteredAmount,
            description: enteredDesc,
            updatedAt: Date.now(),
          }),
        }
      );
      dispatch(fetchExpenseData());
      setIsLoading(false);
      Alert.alert("Successfull", "Expense Updated Successfully");
      props.navigation.navigate("ExpenseDetailScreen", {
        index: props.route.params.index,
      });
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

  if (!expense) {
    return null;
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

export default UpdateExpenseScreen;
