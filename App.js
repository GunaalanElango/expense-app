import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import Header from "./components/Header";
import Colors from "./constant/color";
import AddBalanceModal from "./components/AddBalanceModal";
import HomeScreen from "./screens/HomeScreen";
import OperationModal from "./components/OperationModal";

export default function App() {
  const [showAddBalanceModal, setShowAddBalanceModal] = useState(false);
  const [balance, setBalance] = useState("");
  const [showIncomeModal, setShowIncomeModal] = useState(false);
  const [showSpentModal, setShowSpentModal] = useState(false);
  const [expenseList, setExpenseList] = useState([]);

  const onAddInitBalanceHandler = () => {
    setShowAddBalanceModal(true);
  };

  const onAddBalanceHandler = (enteredBalance) => {
    setBalance(enteredBalance);
    setShowAddBalanceModal(false);
  };

  const onIncomeHandler = () => {
    setShowIncomeModal(true);
  };

  const onSpentHandler = () => {
    setShowSpentModal(true);
  };

  const incomeHandler = (result) => {
    setBalance(result.resultValue);
    setExpenseList((currentList) => [...currentList, result]);
    setShowIncomeModal(false);
  };

  const spentHandler = (result) => {
    setBalance(result.resultValue);
    setExpenseList((currentList) => [...currentList, result]);
    setShowSpentModal(false);
  };

  let startScreen =
    balance == "" ? (
      <View>
        <View style={styles.button}>
          <Button
            title="Add Inital Balance"
            color={Colors.darkGreen}
            onPress={onAddInitBalanceHandler}
          />
        </View>
        <AddBalanceModal
          modalVisible={showAddBalanceModal}
          addBalance={onAddBalanceHandler}
        />
      </View>
    ) : (
      <HomeScreen
        balanceAmount={balance}
        incomeClick={onIncomeHandler}
        spentClick={onSpentHandler}
        expenseList={expenseList}
      />
    );

  let incomeModal = showIncomeModal ? (
    <OperationModal
      balance={balance}
      operation="+"
      onSubmit={incomeHandler}
      modalVisible={showIncomeModal}
      onSubmit={incomeHandler}
      text="Amount to be added.."
    />
  ) : null;

  let spentModal = showSpentModal ? (
    <OperationModal
      modalVisible={showSpentModal}
      balance={balance}
      operation="-"
      onSubmit={spentHandler}
      text="Amount Spent"
    />
  ) : null;

  return (
    <View style={styles.screen}>
      <StatusBar backgroundColor={Colors.white} />
      <Header title="Day-To-Day Expenses" />
      {startScreen}
      {incomeModal}
      {spentModal}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
});
