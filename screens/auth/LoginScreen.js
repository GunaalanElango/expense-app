import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Colors from "../../constant/color";
import { setLoginUser } from "../../store/actions/auth";

const LoginScreen = (props) => {
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users.users);

  const dispatch = useDispatch();

  const onLoginHandler = () => {
    const findUser = users.find((user) => user.email == email);
    if (!findUser) {
      return Alert.alert("User not found!!", "try again with registered email");
    }
    dispatch(setLoginUser(findUser));
  };

  return (
    <View style={styles.screen}>
      <View style={styles.screenContent}>
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
