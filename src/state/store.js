import {
	createStore
} from "redux";
import reducer from "./reducer";

const initialState = {
	rowsNumber: 1,
	columns: [{name:"#"}]
}

const store = createStore(reducer, initialState)
export default store;