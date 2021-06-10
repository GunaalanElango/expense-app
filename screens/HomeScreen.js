import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as Application from "expo-application";

import { fetchBalance, fetchLog } from "../store/actions/expense";
import BalanceCard from "../components/BalanceCard";
import ExpenseListItem from "../components/ExpenseListItem";
import Colors from "../constant/color";

const HomeScreen = (props) => {
  const balance = useSelector((state) => state.balance);
  const expenseLogs = useSelector((state) => state.expenseLogList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance(Application.androidId));
    dispatch(fetchLog(Application.androidId));
  }, []);

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
      <ExpenseListItem expenses={expenseLogs} />
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
