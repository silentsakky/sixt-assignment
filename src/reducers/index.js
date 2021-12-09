import { combineReducers } from "redux";
import offersReducer from "./offers-reducer";

const rootReducer = combineReducers({
	offers: offersReducer,
});

export default rootReducer;
