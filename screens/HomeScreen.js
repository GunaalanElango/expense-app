import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import Colors from "../constant/color";

const HomeScreen = (props) => {
  const groups = useSelector((state) => state.groups.groups);

  const onStartNewGroupHandler = () => {
    props.navigation.navigate("AddGroupScreen");
  };

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={onStartNewGroupHandler}
      >
        <MaterialIcons name="group-add" size={30} color={Colors.orange} />
        <Text style={styles.buttonText}>Start new group</Text>
      </TouchableOpacity>
      <View style={styles.listContainer}>
        <FlatList
          style={styles.list}
          data={groups}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.listItem}
                onPress={() =>
                  props.navigation.navigate("GroupDetailScreen", {
                    id: item.id,
                  })
                }
              >
                <View>
                  <MaterialIcons
                    name="group"
                    size={80}
                    color={Colors.darkViolet}
                  />
                </View>
                <View style={styles.groupInfo}>
                  <Text style={styles.groupText}>{item.groupName}</Text>
                  <Text style={styles.groupText}>({item.category})</Text>
                </View>
              </TouchableOpacity>
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
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
  },
  list: {
    flex: 1,
    width: "90%",
  },
  listItem: {
    flexDirection: "row",
    backgroundColor: Colors.violet,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  groupInfo: {
    justifyContent: "center",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  groupText: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.darkViolet,
    marginRight: 5,
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

export default HomeScreen;
