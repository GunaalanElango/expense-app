import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";

// import { fetchExpenseData } from "../store/actions/expenses";
import Colors from "../constant/color";

const AddExpenseScreen = (props) => {
  const user = useSelector((state) => state.auth.user);
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [friends, setFriends] = useState([]);

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

  const onSubmitHandler = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.addExpenseForm}>
        <View style={styles.friendsForm}>
          <View style={styles.friendInputContainer}>
            <TextInput
              placeholder="Enter names"
              value=""
              onChangeText={setFriends}
              multiline={true}
              selectionColor={Colors.black}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputHead}>
            <SimpleLineIcons name="info" size={24} color="black" />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
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
            value={amount}
            onChangeText={setAmount}
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
  friendInputContainer: {
    paddingHorizontal: 5,
    paddingVertical: 10,
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
