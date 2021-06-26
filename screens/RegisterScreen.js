import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { userRegistration } from "../store/actions/users";

import Colors from "../constant/color";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const onRegisterHandler = () => {
    dispatch(
      userRegistration({
        name,
        email,
        id: Date.now(),
      })
    );
    props.navigation.replace("LoginScreen");
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screenContent}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
            placeholderTextColor="grey"
            autoCompleteType="off"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.button}>
          <Button
            title="REGISTER"
            color={Colors.black}
            onPress={onRegisterHandler}
          />
        </View>

        <View style={styles.toggleText}>
          <TouchableOpacity
            onPress={() => props.navigation.replace("LoginScreen")}
          >
            <Text>Already have a account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  inputContainer: {
    width: "100%",
    marginVertical: 10,
    borderBottomColor: Colors.black,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 16,
    paddingVertical: 2,
  },
  button: {
    alignItems: "center",
  },
  toggleText: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default RegisterScreen;
