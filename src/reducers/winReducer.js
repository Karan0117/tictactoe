const initState = {
  isWon: false,
};

const winReducer = (state = initState, action) => {
  switch (action.type) {
    case "WIN_TOGGLE":
      return { ...state, isWon: !state.isWon };
    default:
      return { ...state };
  }
};

export default winReducer;
