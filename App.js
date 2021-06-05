import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import * as Application from "expo-application";
import * as Location from "expo-location";

import Header from "./components/Header";
import Colors from "./constant/color";
import HomeScreen from "./screens/HomeScreen";
import { initLogTable } from "./helper/db";

export default function App() {
  useEffect(() => {
    initLogTable
      .then(() => console.log("database initialized.."))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.white} />
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
