import React, { useEffect } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useSelector } from "react-redux";

import Colors from "../constant/color";

const GroupDetailScreen = (props) => {
  const { groups, groupMembers } = useSelector((state) => state.groups);

  const group = groups.find((group) => group.id == props.route.params.id);

  const members = groupMembers.filter(
    (groupMember) => groupMember.groupId == group.id
  );

  useEffect(() => {
    props.navigation.setOptions({
      title: group.groupName,
      headerRight: () => {
        return (
          <View style={{ marginHorizontal: 10 }}>
            <Button
              title="Add expense"
              color={Colors.orange}
              onPress={() => props.navigation.navigate("AddExpenseScreen")}
            />
          </View>
        );
      },
    });
  });

  return (
    <View style={styles.screen}>
      <View style={styles.screenContent}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GroupDetailScreen;
