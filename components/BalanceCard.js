import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import Colors from "../constant/color";
import MainButton from "../components/MainButton";

const BalanceCard = (props) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.header}>Your Balance Amount</Text>
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.body}>
          <FontAwesome size={30} name="rupee" /> {props.balanceAmount}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <MainButton
          opacity={0.7}
          clicked={props.onAddBtn}
          buttonStyle={styles.button}
        >
          <MaterialIcons name="add" size={24} color={Colors.white} />
        </MainButton>
        <MainButton
          opacity={0.7}
          clicked={props.onSubBtn}
          buttonStyle={styles.button}
        >
          <Entypo name="minus" size={24} color={Colors.white} />
        </MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.darkViolet,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: Colors.darkViolet,
  },
  bodyContainer: {
    marginVertical: 10,
  },
  body: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.darkViolet,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.darkViolet,
    borderRadius: 10,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});

export default BalanceCard;
