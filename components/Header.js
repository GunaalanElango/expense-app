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
    paddingTop: 45,
    paddingBottom: 20,
    justifyContent: "center",
    backgroundColor: Colors.lightGrey,
    height: 80,
    paddingLeft: 10,
  },
  header: {
    color: Colors.darkBlue,
    fontSize: 20,
    fontWeight: "bold"
  },
});

export default Header;
