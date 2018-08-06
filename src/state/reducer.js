import actionTypes from "./actions";

function reducerSpreadsheet(state, action) {
	switch (action.type) {
		case actionTypes.addColumn:
			return {
				...state,
				rowsNumber: state.columns.length === 1 ? 10 : state.rowsNumber,
				columns: [...state.columns, action.data]
			}
		case actionTypes.addRows:
			return {
				...state,
				rowsNumber: state.rowsNumber + 10
			}
		case actionTypes.editColumn:
			console.log(action.data);
			console.log(state.columns);
			return {
				...state
			}
		default:
			return state
	}
}
export default reducerSpreadsheet;