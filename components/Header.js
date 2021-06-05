import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Colors from "../constant/color";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 80,
    paddingTop: "10%",
    backgroundColor: Colors.lightGrey,
  },
  header: {
    color: Colors.darkBlue,
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
