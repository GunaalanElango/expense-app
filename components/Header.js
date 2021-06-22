import React from "react";
import { StyleSheet, View, Text, StatusBar, Button } from "react-native";
import Colors from "../constant/color";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{props.title}</Text>
      {props.islogout ? (
        <Button title="Logout" onPress={props.logout} color={Colors.orange} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    height: 60,
    width: "100%",
    backgroundColor: Colors.black,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  headerText: {
    color: Colors.white,
    fontSize: 20,
  },
});

export default Header;
