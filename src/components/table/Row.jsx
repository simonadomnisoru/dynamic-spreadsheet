import React from "react";
import { FormControl } from "react-bootstrap";
import ColumnType from "../../helpers/ColumnType";
import OptionsDropDown from "./OptionsDropDown";
import api from "../../api/spreadsheet";

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

class Row extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            className: null
        }
    }
    handleBlur = (element) => {
        // Todo refactor, save valid value to store
        if (this.props.dataColumn.required) {
            let validation = element === "" ? "required" : null;
            let validationMessage = element === "" ? "This row value is required" : null;
            this.props.handleError(validationMessage);
            this.setState({ className: validation });
        }
        let isValidType = validateType(this.props.dataColumn.type, element)
        if(!isValidType){
            this.props.handleError(`This row value must be of type ${this.props.dataColumn.type}`);
            this.setState({ className: !isValidType ? "required" : null })
        }
    };

    render() {
        if (this.props.indexColumn === 0) {
            return <span> {this.props.index + 1}</span>
        }
        if (this.props.dataColumn.type === ColumnType.select) {
            return <OptionsDropDown options={this.props.dataColumn.opts} className={this.state.className} />
        }
        return <FormControl /*type={this.props.dataColumn.type}*/ onBlur={(e) => this.handleBlur(e.target.value)} className={this.state.className} />
    }
}

export default Row;