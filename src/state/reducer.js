import actionTypes from "./actions";

function reducerSpreadsheet(state, action) {
	switch (action.type) {
		case actionTypes.addColumn:
			return {
				...state,
				columnsNumber: state.columnsNumber + 1,
				rowsNumber: state.columnsNumber === 1 ? 10 : state.rowsNumber,
				columns: [...state.columns, action.data]
			}
		case actionTypes.addRows:
			return {
				...state,
				rowsNumber: state.rowsNumber + 10
			}
		case actionTypes.editColumn:
			/*return {
				...state,
				rowsNumber: state.rowsNumber + 10
			}*/
		default:
			return state
	}
}
export default reducerSpreadsheet;