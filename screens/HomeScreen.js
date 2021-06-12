import React, { useEffect } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import * as Application from "expo-application";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

import MainButton from "../components/MainButton";
import { fetchBalance, fetchLog, removeLog } from "../store/actions/expense";
import BalanceCard from "../components/BalanceCard";
// import ExpenseListItem from "../components/ExpenseListItem";
import Colors from "../constant/color";

const ExpenseItem = ({ expense, onDelete, index }) => {
  return (
    <View style={styles.listItem}>
      <View style={styles.indexContainer}>
        <Text style={styles.text}>#{expense.id}</Text>
      </View>

      <View style={styles.exp}>
        <Text style={styles.text}>
          {expense.currentBalance} {expense.operation} {expense.enteredAmount}{" "}
          =&gt; {expense.newBalance}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <MainButton buttonStyle={styles.buttonStyle} clicked>
          <MaterialIcons name="mode-edit" size={25} color={Colors.darkViolet} />
        </MainButton>
        <MainButton
          buttonStyle={styles.buttonStyle}
          clicked={() => onDelete(expense.id, index)}
        >
          <AntDesign name="delete" size={25} color={Colors.red} />
        </MainButton>
      </View>
    </View>
  );
};

const HomeScreen = (props) => {
  const balance = useSelector((state) => state.balance);
  const expenses = useSelector((state) => state.expenseLogList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBalance(Application.androidId));
    dispatch(fetchLog(Application.androidId));
  }, []);

  const onDeleteHandler = (id, index) => {
    dispatch(removeLog(id, index));
    console.log(id, index);
  };

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
      <View style={styles.listContainer}>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
          }}
          data={expenses}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <ExpenseItem
                expense={item}
                index={index}
                onDelete={onDeleteHandler}
              />
            );
          }}
        />
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
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: Colors.darkViolet,
    borderWidth: 1,
    marginTop: 10,
    backgroundColor: Colors.violet,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  indexContainer: {
    flex: 1,
    alignItems: "center",
  },
  exp: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    color: Colors.darkViolet,
  },
  buttonContainer: {
    flex: 2,
    flexDirection: "row",
  },
  buttonStyle: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
