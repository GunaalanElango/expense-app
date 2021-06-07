import React, { useState, useEffect } from "react";
import { StyleSheet, View, Alert, ScrollView } from "react-native";

import ExpenseItem from "../components/ExpenseItem";
import BalanceCard from "../components/BalanceCard";
import Header from "../components/Header";
import OperationBalanceCard from "../components/OperationBalanceCard";
import { Balance, Log } from "../helper/db";

const HomeScreen = (props) => {
  const [balance, setBalance] = useState(0);
  const [showAddComponent, setShowAddComponent] = useState(false);
  const [showSubComponent, setShowSubComponent] = useState(false);
  const [showBalanceCard, setShowBalanceCard] = useState(true);
  const [expenseList, setExpenseList] = useState([]);

  useEffect(() => {
    Balance.selectBalance(props.androidID)
      .then((result) => {
        if (result.rows._array.length != 0) {
          setBalance(result.rows._array[0].balance);
        } else {
          setBalance(0);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    Log.selectLog()
      .then((result) => {
        if (result.rows._array.length != 0) {
          setExpenseList([...result.rows._array]);
        } else {
          setExpenseList([]);
        }
      })
      .catch((error) => console.error(error));
  }, [balance]);

  const onSubmitHandler = (value, operation) => {
    const enteredValue = parseInt(value);

    if (operation == "+") {
      setBalance((currentValue) => currentValue + enteredValue);

      Balance.insertBalance(balance + enteredValue, props.androidID)
        .then((result) => console.log("[ADD BALANCE RESULT]", result))
        .catch((error) => console.error(error));

      Log.insertLog(enteredValue, operation, balance + enteredValue, balance)
        .then((result) => console.log("[LOG ADD INSERT RESULT]" + result))
        .catch((error) => console.error(error));
    } else {
      if (balance >= enteredValue) {
        setBalance((currentValue) => currentValue - enteredValue);

        Balance.insertBalance(balance - enteredValue, props.androidID)
          .then((result) => console.log("[SUBTRACT BALANCE RESULT]", result))
          .catch((error) => console.error(error));

        Log.insertLog(enteredValue, operation, balance - enteredValue, balance)
          .then((result) => console.log("[LOG SUB INSERT RESULT]" + result))
          .catch((error) => console.error(error));
      } else {
        Alert.alert(
          "Insufficient Balance",
          "Amount should be lesser than Balance",
          [{ text: "Okay", style: "destructive" }]
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
    expenseList.length != 0 &&
    expenseList.map((expense) => (
      <ExpenseItem
        key={expense.id}
        operation={expense.operation}
        currentBalance={expense.current_balance}
        amount={expense.amount}
        previousBalance={expense.previous_balance}
      />
    ));

  return (
    <View style={styles.screen}>
      <Header title="ExpensesApp" />
      {balanceCard}
      {addBalanceCard}
      {subBalanceCard}
      <View style={styles.listContainer}>
        <ScrollView style={styles.list}>{expensesList}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    flex: 1,
    width: "90%",
  },
  list: {
    width: "100%",
  },
});

export default HomeScreen;
