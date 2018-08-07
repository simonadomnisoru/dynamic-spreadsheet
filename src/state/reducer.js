import actionTypes from "./actions";

let reducerSpreadsheet = (state, action) => {
	switch (action.type) {
		case actionTypes.addColumn:
			return {
				...state,
				rowsNumber: state.columns.length === 1 ? 10 : state.rowsNumber,
				columns: [...state.columns, action.data]
			}
		case actionTypes.addRows:
			let rowsNumber = state.columns.length === 1 ? state.rowsNumber : state.rowsNumber + 10
			return {
				...state,
				rowsNumber: rowsNumber
			}
		case actionTypes.editColumn:
			let newColumns = [...state.columns];
			newColumns[action.data.index] = {
				...newColumns[action.data.index],
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