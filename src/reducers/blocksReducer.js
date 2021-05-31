const initState = {
  occupiedBlocks: [],
};

const blockReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_BLOCK":
      return { ...state, occupiedBlocks: action.payload };
    default:
      return { ...state };
  }
};

export default blockReducer;
