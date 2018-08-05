import {
	createStore
} from "redux";
import reducer from "./reducer";

const initialState = {
	columnsNumber: 1,
	rowsNumber: 1,
	columns: [{name:"#"}]
}
/*
const initialState = {
	columnsNumber: 0,
	rowsNumber: 0,
	columns: []
}*/

const store = createStore(reducer, initialState)
export default store;