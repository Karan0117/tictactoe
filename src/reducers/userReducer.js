const initState = {
  isPlayer1: true,
  isCircle: true,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case "SWITCH_USER":
      return {
        ...state,
        isPlayer1: !state.isPlayer1,
        isCircle: !state.isCircle,
      };
    case "SIDE_RESET":
      return {
        ...state,
        isPlayer1: true,
        isCircle: true,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
