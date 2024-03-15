import { combineReducers } from "redux";
import pageReducer from "./pageReducer";
import authReducer from "./authReducer";

export default combineReducers({
  pageStore: pageReducer,
  authStore: authReducer
});
