/*
	Future handler to interact with the backend.
	For now Redux acts as a saving mechanism. The data recieved from the React components is dispached and stored to the redux store
	This data can be send to any backend API in future iterations.
*/

import store from "../state/store";
import actions from "../state/actions";
import ColumnType from "../helpers/ColumnType";

let processMultipleOptions = (data) => {
	let options = Array.from(data.values())
		.filter(node => node !== null && node.value !== "")
		.map(node => node.value);
	options.unshift("");
	return options;
}


const addColumn = (data, opts) => {
	if (data.type === ColumnType.select) {
		data.opts = processMultipleOptions(opts);
	}
	store.dispatch({
		type: actions.addColumn,
		data
	});
};

const addRows = () => {
	store.dispatch({
		type: actions.addRows
	});
};

const editColumn = (data) => {
	store.dispatch({
		type: actions.editColumn,
		data
	});
};

const editRow = (data) => {
	store.dispatch({
		type: actions.editRow,
		data
	});
};


const api = {
	addColumn: addColumn,
	addRows: addRows,
	editColumn: editColumn,
	editRow: editRow
};

export default api;