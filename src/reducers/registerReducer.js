const initState = {
  isRegister: false,
};

const registerReducer = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_TOGGLE":
      return { ...state, isRegister: !state.isRegsiter };
    default:
      return { ...state };
  }
};

export default registerReducer;
