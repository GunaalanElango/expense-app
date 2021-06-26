export const ADD_USER = "ADD_USER";

export const userRegistration = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};
