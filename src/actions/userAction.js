export const userSwitcher = () => (dispatch) => {
  dispatch({
    type: "SWITCH_USER",
  });
};

export const userRegister = (userNames) => (dispatch) => {
  dispatch({
    type: "NEW_USER_REGISTER",
    payload: {
      userOne: userNames[0],
      userTwo: userNames[1],
    },
  });
};
