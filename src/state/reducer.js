import actionTypes from "./actions";

const editColumn = (newColumns, data) => {
	newColumns[data.index] = {
		...newColumns[data.index],
		name: data.name
	}
	return newColumns;
}

const editRow = (newRows, data) => {
	let existRowIndex = newRows.findIndex(obj => {
		return obj.indexColumn === data.indexColumn && obj.indexRow === data.indexRow
	});
	if (existRowIndex === -1) {
		newRows.push(data);
	} else {
		newRows[existRowIndex] = {
			...newRows[existRowIndex],
			value: data.value
		}
	}
	return newRows;
}

let reducerSpreadsheet = (state, action) => {
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
				rowsNumber: state.columns.length === 1 ? state.rowsNumber : state.rowsNumber + 10
			}
		case actionTypes.editColumn:
			return {
				...state,
				columns: editColumn([...state.columns], action.data)
			}
		case actionTypes.editRow:
			return {
				...state,
				rows: editRow([...state.rows], action.data)
			}
		default:
			return state
	}
}
export default reducerSpreadsheet;