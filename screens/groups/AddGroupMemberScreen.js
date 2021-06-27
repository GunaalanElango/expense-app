import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import { addGroupMember } from "../../store/actions/groups";

import Colors from "../../constant/color";

const AddGroupMemberScreen = (props) => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    dispatch(
      addGroupMember({
        groupId: props.route.params.groupId,
        user: {
          id: Date.now(),
          name: name,
          email: "",
        },
      })
    );
    props.navigation.navigate("GroupSettingScreen");
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <View style={{ marginHorizontal: 10 }}>
          <TouchableOpacity onPress={onSubmitHandler}>
            <MaterialIcons name="done" size={24} color={Colors.orange} />
          </TouchableOpacity>
        </View>
      ),
    });
  });

  return (
    <View style={styles.screen}>
      <View style={styles.createGroupForm}>
        <View>
          <Text style={styles.label}>Name :</Text>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  createGroupForm: {
    flex: 1,
    paddingHorizontal: "10%",
    marginTop: 20,
  },
  input: {
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 2,
    borderBottomColor: Colors.black,
    borderBottomWidth: 2,
    color: Colors.black,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.black,
  },
});

export default AddGroupMemberScreen;
