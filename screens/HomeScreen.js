import React, { useEffect } from "react";
import { StyleSheet, View, Button, Text, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// import { fetchExpenseData } from "../store/actions/expense";
import { fetchUser } from "../store/actions/user";
import Colors from "../constant/color";
import Header from "../components/Header";
import AuthScreen from "../screens/AuthScreen";

const HomeScreen = (props) => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   try {
  //     dispatch(fetchUser());
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  useEffect(() => {
    props.navigation.setOptions({
      tabBarVisible: isAuthenticated ? true : false,
    });
  });

  if (!isAuthenticated) {
    return <AuthScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="ExpenseApp" />
      <View style={styles.button}>
        <Button
          title="Add Expense"
          onPress={() => props.navigation.navigate("AddExpenseScreen")}
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  button: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default HomeScreen;
