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
import { useDispatch } from "react-redux";

import Colors from "../constant/color";
import { SET_USERID } from "../store/actions/user";

const LoginScreen = (props) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const mobileRegex = new RegExp(/\d\d\d\d\d\d\d\d\d\d/);

  const onLoginHandler = async () => {
    try {
      if (mobileNumber.length != 10 || !mobileRegex.test(mobileNumber)) {
        return Alert.alert(
          "Mobile number is invalid",
          "Should contain only numbers"
        );
      }

      setIsLoading(true);
      const response = await fetch(
        `https://60cb210521337e0017e43e34.mockapi.io/users?mobileNumber=${mobileNumber}`
      );
      const responseData = await response.json();
      setIsLoading(false);

      if (responseData.users[0]) {
        dispatch({
          type: SET_USERID,
          userId: responseData.users[0].id,
          isAuthenticated: true,
        });
      } else {
        return Alert.alert(
          "User not found",
          "Please use your registered mobile number"
        );
      }
    } catch (error) {
      Alert.alert("Error", "error in login");
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
            placeholder="Mobile number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            placeholderTextColor="grey"
          />
        </View>

        <View style={styles.button}>
          <Button title="LOGIN" color={Colors.black} onPress={onLoginHandler} />
        </View>

        <View style={styles.toggleText}>
          <TouchableOpacity
            onPress={() => props.navigation.replace("RegisterScreen")}
          >
            <Text>Don't have a account?</Text>
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

export default LoginScreen;
