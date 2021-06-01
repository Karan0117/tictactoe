const initState = {
  usernameOne: [],
  usernameTwo: [],
};

const userInfoReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_USER_REGISTER":
      return {
        ...state,
        usernameOne: action.payload.userOne,
        usernameTwo: action.payload.userTwo,
      };
    default:
      return { ...state };
  }
};

export default userInfoReducer;
