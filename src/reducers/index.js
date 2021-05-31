import { combineReducers } from "redux";
// reducers
import userReducer from "./userReducer";
import solutionsReducer from "./solutionsReducer";
import blocksReducer from "./blocksReducer";

// combining reducers
const rootReducers = combineReducers({
  user: userReducer,
  solutions: solutionsReducer,
  blocks: blocksReducer,
});

export default rootReducers;
