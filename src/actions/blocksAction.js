export const blocksAction = (data) => (dispatch) => {
  dispatch({
    type: "ADD_NEW_BLOCK",
    payload: data,
  });
};
