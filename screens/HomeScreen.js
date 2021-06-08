import React from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import BalanceCard from "../components/BalanceCard";
import Colors from "../constant/color";

const HomeScreen = (props) => {
  const balance = useSelector((state) => state.balance);

  return (
    <View style={styles.screen}>
      <BalanceCard
        balanceAmount={balance}
        onAddBtn={() =>
          props.navigation.navigate("OperationScreen", {
            operation: "+",
          })
        }
        onSubBtn={() =>
          props.navigation.navigate("OperationScreen", {
            operation: "-",
          })
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
});

export default HomeScreen;
