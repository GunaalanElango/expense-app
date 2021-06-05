import React, { useState, useEffect } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";

import ExpenseItem from "../components/ExpenseItem";
import BalanceCard from "../components/BalanceCard";
import Header from "../components/Header";
import OperationBalanceCard from "../components/OperationBalanceCard";
import { insertLog, selectLog } from "../helper/db";

const HomeScreen = (props) => {
  const [balance, setBalance] = useState(0);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showSubComponent, setShowSubComponent] = useState(false);
  const [showBalanceCard, setShowBalanceCard] = useState(true);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    selectLog()
      .then((result) => setExpenseList([...result.rows._array]))
      .catch((error) => console.log(error));
  }, []);

  const onSubmitHandler = (value, operation) => {
    const enteredValue = parseInt(value);

    if (operation == "+") {
      insertLog(enteredValue, operation, balance + enteredValue, balance)
        .then((result) => console.log(result))
        .catch((error) => console.log(error));

      setBalance((currentValue) => currentValue + enteredValue);
    } else {
      if (balance >= value) {
        setBalance((currentValue) => currentValue - enteredValue);
      } else {
        Alert.alert(
          "Insufficient Balance",
          "Amount should be lesser than Balance",
          [
            {
              text: "Okay",
              style: "destructive",
            },
          ]
        );
        return;
      }
    }

    setShowBalanceCard(true);
    setShowAddComponent(false);
    setShowSubComponent(false);
  };

  const onAddBalanceHandler = () => {
    setShowAddComponent(true);
    setShowBalanceCard(false);
    setShowSubComponent(false);
  };

  const onSubBalanceHandler = () => {
    setShowSubComponent(true);
    setShowAddComponent(false);
    setShowBalanceCard(false);
  };

  const onBackHandler = () => {
    setShowBalanceCard(true);
    setShowAddComponent(false);
    setShowSubComponent(false);
  };

  let balanceCard = showBalanceCard ? (
    <BalanceCard
      balanceAmount={balance}
      onAddBtn={onAddBalanceHandler}
      onSubBtn={onSubBalanceHandler}
    />
  ) : null;

  let addBalanceCard = showAddComponent ? (
    <OperationBalanceCard
      operation="+"
      onSubmit={onSubmitHandler}
      onBack={onBackHandler}
    />
  ) : null;

  let subBalanceCard = showSubComponent ? (
    <OperationBalanceCard
      operation="-"
      onSubmit={onSubmitHandler}
      onBack={onBackHandler}
    />
  ) : null;

  let expensesList =
    expenseList.length != 0 ? (
      expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          operation={expense.operation}
          currentBalance={expense.current_balance}
          amount={expense.amount}
          previousBalance={expense.previous_balance}
        />
      ))
    ) : (
      <Text>Empty Lists</Text>
    );

  return (
    <View style={styles.screen}>
      <Header title="ExpensesApp" />
      {balanceCard}
      {addBalanceCard}
      {subBalanceCard}
      {expensesList}
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
