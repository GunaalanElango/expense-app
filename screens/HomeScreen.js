import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import BalanceCard from "../components/BalanceCard";

const HomeScreen = (props) => {
  const [balance, setBalance] = useState(0);
  // const [expenseList, setExpenseList] = useState([]);

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
