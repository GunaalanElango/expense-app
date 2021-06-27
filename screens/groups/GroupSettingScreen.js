import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";

import Colors from "../../constant/color";
import { deleteGroupMember } from "../../store/actions/groups";

const GroupSettingScreen = ({ navigation, route }) => {
  const { groups, groupMembers } = useSelector((state) => state.groups);

  const group = groups.find((group) => group.id == route.params.groupId);

  const members = groupMembers.filter(
    (groupMember) => groupMember.groupId == group.id
  );

  const dispatch = useDispatch();

  const onAddMemberHandler = () => {
    navigation.navigate("AddGroupMemberScreen", {
      groupId: group.id,
    });
  };

  const onDeleteMemberHandler = (index) => {
    dispatch(deleteGroupMember(index));
  };

  return (
    <View style={styles.screen}>
      <ScrollView style={styles.screenContent}>
        <View style={styles.membersContainer}>
          <Text style={styles.memberTextHeading}>Group Members</Text>
          {members.map((member, index) => {
            return (
              <View key={index.toString()} style={styles.memberListItem}>
                <Text style={styles.text}>{index + 1}</Text>
                <Text style={styles.text}>{member.user.name}</Text>
                <TouchableOpacity onPress={() => onDeleteMemberHandler(index)}>
                  <MaterialIcons name="delete" size={24} color={Colors.red} />
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={onAddMemberHandler}
        >
          <MaterialIcons name="group-add" size={20} color={Colors.orange} />
          <Text style={styles.buttonText}>Add group members</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenContent: {
    flex: 1,
  },
  buttonContainer: {
    paddingHorizontal: "10%",
    flexDirection: "row",
    marginTop: 10,
  },
  buttonText: {
    color: Colors.orange,
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  memberTextHeading: {
    fontSize: 25,
    color: Colors.orange,
    fontWeight: "bold",
  },
  membersContainer: {
    paddingHorizontal: "10%",
    marginTop: 15,
  },
  memberListItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.backgroundViolet,
    padding: 10,
    borderRadius: 5,
    justifyContent: "space-between",
  },
  text: {
    color: Colors.darkViolet,
    fontSize: 18,
  },
});

export default GroupSettingScreen;
