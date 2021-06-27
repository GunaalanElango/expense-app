import React, { useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constant/color";

const GroupDetailScreen = ({ navigation, route }) => {
  const { groups } = useSelector((state) => state.groups);

  const group = groups.find((group) => group.id == route.params.id);

  useEffect(() => {
    navigation.setOptions({
      title: group.name,
      headerRight: () => {
        return (
          <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("GroupSettingScreen", {
                  groupId: group.id,
                })
              }
            >
              <MaterialIcons name="settings" size={24} color={Colors.orange} />
            </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: Colors.orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
});

export default GroupDetailScreen;
