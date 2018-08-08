/*
	Validation for the row values
*/

import ColumnType from "../helpers/ColumnType";

const validateType = (type, data) => {
    switch (type) {
        case ColumnType.date:
            return !isNaN(Date.parse(data));
        case ColumnType.number:
            return !isNaN(data);
        default:
            return true;
    }
}

const validationMessages = (isRequired, isValid, isEmpty, type) => {
    let errorRequired = isRequired && isEmpty ? `This row value is required.` : "";
    let errorValid = !isValid ? `This row value must be of type ${type}.` : "";
    return {
        className: (isRequired && isEmpty) || !isValid ? "required" : null,
        errorMessage: errorRequired + errorValid,
    }
}

const validate = (element, dataColumn) => {
    return validationMessages(dataColumn.required, validateType(dataColumn.type, element), element === "", dataColumn.type);
}

const validation = {
    validate: validate
};

export default validation;