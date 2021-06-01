import { StyleSheet } from "react-native";
import Colors from "./color";

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginVertical: 10,
    paddingVertical: 8,
    backgroundColor: Colors.lightGrey,
    paddingLeft: 10,
    borderRadius: 8,
  },
  input: {
    color: Colors.darkFadeBlue,
    fontSize: 18,
  },
});

export default styles;
