import React, { useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Application from "expo-application";
import { fetchLog } from "../store/actions/expense";
import { useDispatch, useSelector } from "react-redux";

const LogScreen = (props) => {
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLog(Application.androidId));
  }, [balance]);

  return (
    <View style={styles.screen}>
      <Text>LogScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LogScreen;
