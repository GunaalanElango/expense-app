import { StyleSheet } from "react-native";
import Colors from "./color";

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginVertical: 10,
    paddingVertical: 8,
    backgroundColor: Colors.violet,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.darkViolet,
  },
  input: {
    color: Colors.darkViolet,
    fontSize: 18,
  },
});

export default styles;
