import React from "react";
import { FormControl } from "react-bootstrap";
import ColumnType from "../../helpers/ColumnType";
import Validation from "../../helpers/ValidateRow";
import OptionsDropDown from "./OptionsDropDown";
import api from "../../api/spreadsheet";
class Row extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            className: null
        }
    }
    handleBlur = (value) => {
        let validate = Validation.validate(value, this.props.dataColumn);
        api.editRow({ value, indexColumn: this.props.indexColumn, indexRow: this.props.indexRow });
        this.props.handleError(validate.errorMessage);
        this.setState({ className: validate.className });
    };

    render() {
        if (this.props.indexColumn === 0) {
            return <span> {this.props.indexRow + 1}</span>
        }
        if (this.props.dataColumn.type === ColumnType.select) {
            return <OptionsDropDown options={this.props.dataColumn.opts} className={this.state.className} handleBlur={(e) => this.handleBlur(e.target.value)} />
        }
        return <FormControl type={this.props.dataColumn.type} onBlur={(e) => this.handleBlur(e.target.value)} className={this.state.className} />
    }
}

export default Row;