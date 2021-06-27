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
import RadioGroup from "react-native-radio-buttons-group";

import Colors from "../../constant/color";
import { addGroup } from "../../store/actions/groups";

const AddGroupScreen = (props) => {
  const radioButtonsData = [
    {
      id: "1",
      label: "Home",
      value: "home",
    },
    {
      id: "2",
      label: "Trip",
      value: "trip",
    },
  ];

  const [radioButtons, setRadioButtons] = useState(radioButtonsData);
  const [groupName, setGroupName] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = () => {
    let selectedCategory = radioButtons.find(
      (radioButton) => radioButton.selected == true
    );
    dispatch(
      addGroup({
        id: Date.now(),
        type: selectedCategory.label,
        name: groupName,
      })
    );
    props.navigation.navigate("HomeScreen");
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
          <TextInput
            style={styles.input}
            value={groupName}
            onChangeText={setGroupName}
          />
        </View>
        <View style={styles.radioButtonContainer}>
          <Text style={styles.label}>Type :</Text>
          <RadioGroup
            layout="row"
            radioButtons={radioButtons}
            onPress={setRadioButtons}
          />
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
  radioButtonContainer: {
    marginTop: 10,
  },
});

export default AddGroupScreen;
