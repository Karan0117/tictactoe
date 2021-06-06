import { combineReducers } from "redux";
// reducers
import userReducer from "./userReducer";
import solutionsReducer from "./solutionsReducer";
import winReducer from "./winReducer";
import restartReducer from "./restartReducer";
import registerReducer from "./registerReducer";
import userInfoReducer from "./userInfoReducer";
import newGameReducer from "./newGameReducer";

// combining reducers
const rootReducers = combineReducers({
  user: userReducer,
  solutions: solutionsReducer,
  newGameStatus: newGameReducer,
  winStatus: winReducer,
  restartStatus: restartReducer,
  registerStatus: registerReducer,
  userInfo: userInfoReducer,
});

export default rootReducers;
