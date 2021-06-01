const initState = {
  isRestart: false,
};

const restartReducer = (state = initState, action) => {
  switch (action.type) {
    case "RESTART_GAME":
      return { ...state, isRestart: !state.isRestart };
    default:
      return { ...state };
  }
};

export default restartReducer;
