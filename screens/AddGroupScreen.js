import React, { useState } from "react";
import { StyleSheet, View, TextInput, Text, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../constant/color";
import { addGroup } from "../store/actions/groups";

const AddGroupScreen = (props) => {
  const [category, setCategory] = useState("");
  const [groupName, setGroupName] = useState("");
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    dispatch(
      addGroup({
        id: Date.now(),
        category,
        groupName,
      })
    );
    props.navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <Text>Name:</Text>
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>Group Type:</Text>
          <TextInput
            style={styles.input}
            value={category}
            onChangeText={setCategory}
            placeholder="Eg: Trip, Home etc"
          />
        </View>
        <View style={styles.button}>
          <Button title="ADD" color={Colors.black} onPress={onSubmitHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  form: {
    flex: 1,
    paddingHorizontal: "10%",
    marginTop: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    fontSize: 18,
    padding: 8,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 10,
  },
  button: {
    alignItems: "center",
    marginTop: 10,
  },
});

export default AddGroupScreen;
