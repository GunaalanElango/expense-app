import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  Button,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import * as Applicaton from "expo-application";
import { useDispatch } from "react-redux";

import Colors from "../constant/color";
import Header from "../components/Header";
import { SET_USERID } from "../store/actions/user";

const AuthScreen = (props) => {
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const dispatch = useDispatch();

  const mobileRegex = new RegExp(/\d\d\d\d\d\d\d\d\d\d/);

  const onSigninHandler = async () => {
    try {
      if (mobileNumber.length != 10 || !mobileRegex.test(mobileNumber)) {
        return Alert.alert(
          "Mobile number is invalid",
          "Should contain only numbers"
        );
      }
      setIsLoading(true);
      const response = await fetch(
        "https://60cb210521337e0017e43e34.mockapi.io/users"
      );
      const responseData = await response.json();
      setIsLoading(false);
      let usersMbNumber = [];
      for (const user of responseData.users) {
        usersMbNumber.push(user.mobileNumber);
      }
      if (usersMbNumber.includes(mobileNumber)) {
        console.log("Login Success");
      } else {
        console.log("User not found");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignupHandler = async () => {
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
        "https://60cb210521337e0017e43e34.mockapi.io/users"
      );
      const existingUser = await findingExistingUser.json();
      let userMobileNumber = [];
      for (const user of existingUser.users) {
        userMobileNumber.push(user.mobileNumber);
      }

      if (userMobileNumber.includes(mobileNumber)) {
        setIsLoading(false);
        return Alert.alert(
          "Mobile number already exits",
          "try again with different number"
        );
      } else {
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
          return Alert.alert("Something went wrong");
        }

        const responseData = await response.json();
        setIsLoading(false);

        Alert.alert("Successfull!", "User created login to continue");
        setIsSignin(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.screen}>
        <StatusBar />
        <Header title={isSignin ? "Sign In" : "Sign Up"} />
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
      <StatusBar />
      <Header title={isSignin ? "Sign In" : "Sign Up"} />
      <View style={styles.screenContent}>
        {isSignin ? null : (
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
        )}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Mobile number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor="grey"
            autoCompleteType="off"
          />
        </View>
        <View style={styles.button}>
          <Button
            title={isSignin ? "SIGN IN" : "SIGN UP"}
            color={Colors.black}
            onPress={isSignin ? onSigninHandler : onSignupHandler}
          />
        </View>
        <View style={styles.toggleText}>
          <TouchableOpacity
            onPress={() => setIsSignin((prevState) => !prevState)}
          >
            <Text>
              {isSignin ? "Don't have a account?" : "Already have a account?"}
            </Text>
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
    fontSize: 18,
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

export default AuthScreen;
