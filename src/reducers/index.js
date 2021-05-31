import { combineReducers } from "redux";
// reducers
import userReducer from "./userReducer";
import solutionsReducer from "./solutionsReducer";
import blocksReducer from "./blocksReducer";
import winReducer from "./winReducer";

// combining reducers
const rootReducers = combineReducers({
  user: userReducer,
  solutions: solutionsReducer,
  blocks: blocksReducer,
  winStatus: winReducer,
});

export default rootReducers;
