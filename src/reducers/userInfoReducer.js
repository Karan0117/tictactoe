const initState = {
  userOne: {
    name: "ROBOT 1",
    countWin: 0,
    countLost: 0,
    streak: 0,
  },
  userTwo: {
    name: "ROBOT 2",
    countWin: 0,
    countLost: 0,
    streak: 0,
  },
};

const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_USER_REGISTER":
      return {
        ...state,
        userOne: { ...state.userOne, name: action.payload.name.userOne },
        userTwo: { ...state.userTwo, name: action.payload.name.userTwo },
      };
    default:
      return { ...state };
  }
};

export default userInfoReducer;
