import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../components/Header";

const FriendScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Header title="Friends" />
      <View style={styles.screenContent}>
        <Text>Friends Screen</Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendScreen;
