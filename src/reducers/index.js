import { combineReducers } from "redux";
// reducers
import userReducer from "./userReducer";
import solutionsReducer from "./solutionsReducer";
import blocksReducer from "./blocksReducer";
import winReducer from "./winReducer";
import restartReducer from "./restartReducer";
import registerReducer from "./registerReducer";
import userInfoReducer from "./userInfoReducer";

// combining reducers
const rootReducers = combineReducers({
  user: userReducer,
  solutions: solutionsReducer,
  // blocks: blocksReducer,
  winStatus: winReducer,
  restartStatus: restartReducer,
  registerStatus: registerReducer,
  userInfo: userInfoReducer,
});

export default rootReducers;
