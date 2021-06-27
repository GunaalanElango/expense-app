export const CREATE_GROUP = "CREATE_GROUP";
export const ADD_GROUP_MEMBERS = "ADD_GROUP_MEMBERS";
export const DELETE_GROUP_MEMBERS = "DELETE_GROUP_MEMBERS";

export const addGroup = (group) => {
  return (dispatch, getState) => {
    dispatch({
      type: CREATE_GROUP,
      group,
    });
    dispatch({
      type: ADD_GROUP_MEMBERS,
      member: {
        groupId: group.id,
        user: getState().auth.user,
      },
    });
  };
};

export const addGroupMember = (member) => {
  return {
    type: ADD_GROUP_MEMBERS,
    member,
  };
};

export const deleteGroupMember = (index) => {
  return {
    type: DELETE_GROUP_MEMBERS,
    index,
  };
};
