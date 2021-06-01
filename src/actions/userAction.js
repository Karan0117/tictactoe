export const userSwitcher = () => (dispatch) => {
  dispatch({
    type: "SWITCH_USER",
  });
};

export const userReset = () => (dispatch) => {
  dispatch({
    type: "USER_RESET",
  });
};

export const userRegister = (userNames) => (dispatch) => {
  dispatch({
    type: "NEW_USER_REGISTER",
    payload: {
      name: {
        userOne: userNames[0],
        userTwo: userNames[1],
      },
    },
  });
};
