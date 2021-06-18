import React, { useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";
import { useDispatch } from "react-redux";

import { fetchExpenseData } from "../store/actions/expense";
import Colors from "../constant/color";

const HomeScreen = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchExpenseData());
  }, [dispatch]);

  return (
    <View style={styles.screen}>
      <Button
        title="Add Expense"
        onPress={() => props.navigation.navigate("AddExpenseScreen")}
        color={Colors.orange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
});

export default HomeScreen;
