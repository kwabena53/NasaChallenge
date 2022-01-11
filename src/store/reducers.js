import { combineReducers } from "redux";
import reducer from "../duck/reducer";



const reducers = combineReducers({
  data: reducer, 
});

export default reducers;
