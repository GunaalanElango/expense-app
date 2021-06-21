import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import Colors from "../constant/color";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: "100%",
    backgroundColor: Colors.black,
    justifyContent: "center",
    paddingLeft: 20,
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default Header;
