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
			let newColumns = [...state.columns];
			newColumns[action.data.index] = { ...newColumns[action.data.index],
				name: action.data.name
			}
			return {
				...state,
				columns: newColumns
			}
		default:
			return state
	}
}
export default reducerSpreadsheet;