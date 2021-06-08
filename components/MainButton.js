import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={props.opacity}
      onPress={props.clicked}
      style={{ ...props.buttonStyle }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default MainButton;
