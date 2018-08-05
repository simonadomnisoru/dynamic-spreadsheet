import store from "../state/store";
import actions from "../state/actions";

const addColumn = function (data) {
	store.dispatch({ type: actions.addColumn, data });
};

const addRows = function (data) {
	store.dispatch({ type: actions.addRows});
};

const editColumn = function (data) {
	store.dispatch({ type: actions.editColumn});
};

const api = {
	addColumn: addColumn,
	addRows: addRows,
	editColumn: editColumn
};

export default api;