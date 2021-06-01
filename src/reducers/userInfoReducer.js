const initState = {
  userOne: {
    name: "ROBOT 1",
    countWin: 0,
    countLost: 0,
  },
  userTwo: {
    name: "ROBOT 2",
    countWin: 0,
    countLost: 0,
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
    case "USER1_UPDATE":
      return {
        ...state,
        userOne: {
          ...state.userOne,
          countWin: state.userOne.countWin + action.payload.value,
        },
        userTwo: {
          ...state.userTwo,
          countLost: state.userTwo.countLost + action.payload.value,
        },
      };
    case "USER2_UPDATE":
      return {
        ...state,
        userOne: {
          ...state.userOne,
          countLost: state.userOne.countLost + action.payload.value,
        },
        userTwo: {
          ...state.userTwo,
          countWin: state.userTwo.countWin + action.payload.value,
        },
      };
    default:
      return { ...state };
  }
};

export default userInfoReducer;
