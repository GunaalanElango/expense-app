import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import Colors from "../constant/color";

const RegisterScreen = (props) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mobileRegex = new RegExp(/\d\d\d\d\d\d\d\d\d\d/);

  const onRegisterHandler = async () => {
    try {
      if (mobileNumber.length != 10 || !mobileRegex.test(mobileNumber)) {
        return Alert.alert(
          "Mobile number is invalid",
          "Should contain only numbers"
        );
      }

      if (name.length == 0) {
        return Alert.alert("Name invalid", "Name should not be empty");
      }

      setIsLoading(true);
      const findingExistingUser = await fetch(
        `https://60cb210521337e0017e43e34.mockapi.io/users?mobileNumber=${mobileNumber}`
      );

      if (!findingExistingUser.ok) {
        return Alert.alert("Fetching existing user failed", "please try again");
      }

      const existingUser = await findingExistingUser.json();
      if (existingUser.users[0]) {
        setIsLoading(false);
        return Alert.alert(
          "Mobile number already exits",
          "try again with different number"
        );
      }

      const response = await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            mobileNumber,
            name,
          }),
        }
      );

      if (!response.ok) {
        return Alert.alert("Creating a new user failed", "Please try again");
      }
      setIsLoading(false);

      Alert.alert("Successful!", "User created login to continue", [
        {
          text: "Ok",
          onPress: () => props.navigation.replace("LoginScreen"),
        },
      ]);
    } catch (error) {
      Alert.alert("Error", "error in register");
    }
  };

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={Colors.black} />
        </View>
      </View>
    );
  }

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
            placeholder="Mobile number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
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
