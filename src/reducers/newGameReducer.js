const initState = {
  isNewGame: false,
};

const newGameReducer = (state = initState, action) => {
  switch (action.type) {
    case "NEW_GAME_TOGGLE":
      return {
        ...state,
        isNewGame: !state.isNewGame,
      };
    default:
      return { ...state };
  }
};

export default newGameReducer;
