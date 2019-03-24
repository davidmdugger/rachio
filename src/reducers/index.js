import { combineReducers } from "redux";

import dogReducer from "../containers/Test/reducer";

export default combineReducers({
  dog: dogReducer
});
