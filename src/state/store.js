import {
	createStore
} from "redux";
import reducer from "./reducer";

const initialState = {
	rowsNumber: 1,
	columns: [{name:"#"}],
	rows: {}
}

const store = createStore(reducer, initialState)
export default store;