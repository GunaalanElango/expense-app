import {
  ADD_GROUP_MEMBERS,
  CREATE_GROUP,
  DELETE_GROUP_MEMBERS,
} from "../actions/groups";

const initialState = {
  groups: [],
  groupMembers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP:
      if (state.groups.length == 0)
        return {
          ...state,
          groups: [action.group],
        };
      else
        return {
          ...state,
          groups: [...state.groups, action.group],
        };

    case ADD_GROUP_MEMBERS:
      if (state.groupMembers.length == 0)
        return {
          ...state,
          groupMembers: [action.member],
        };
      else
        return {
          ...state,
          groupMembers: [...state.groupMembers, action.member],
        };

    case DELETE_GROUP_MEMBERS:
      const updatedMembers = [...state.groupMembers];
      updatedMembers.splice(action.index, 1);
      return {
        ...state,
        groupMembers: updatedMembers,
      };

    default:
      return state;
  }
};

export default reducer;
