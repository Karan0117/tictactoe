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

export const userUpdate = (isPlayer1) => (dispatch) => {
  if (isPlayer1) {
    dispatch({
      type: "USER1_UPDATE",
      payload: {
        value: 1,
      },
    });
  }
  if (!isPlayer1) {
    dispatch({
      type: "USER2_UPDATE",
      payload: {
        value: 1,
      },
    });
  }
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
