import React from "react";
import { FormControl } from "react-bootstrap";
import ColumnType from "../helpers/ColumnType";

const OptionsDropDown = ({ handleRef, options }) => (
    <FormControl componentClass="select" inputRef={el => handleRef(el)}>
        {options.map((data, indexColumn) => {
            return (
                <option key={`option_${indexColumn}`} value={data}>
                    {data}
                </option>
            )
        })}
    </FormControl>
);

class Rows extends React.Component {
    handleBlur = () => {};

    render() {
        let rows = [...Array(this.props.rowsNumber)];
        return (
            <tbody>
                {rows.map((dataRow, index) => {
                    return (
                        <tr key={`row_${index}`}>
                            {this.props.columns.map((dataColumn, indexColumn) => {
                                if (dataColumn.type !== ColumnType.select)
                                    return (
                                        <td key={`column_${indexColumn}`}>
                                            {indexColumn !== 0 ? <FormControl type={dataColumn.type} onBlur={this.handleBlur} /> : index + 1}
                                        </td>
                                    );
                                else
                                    return (
                                        <td key={`column_${indexColumn}`}>
                                            <OptionsDropDown handleRef={el => (this._type = el)} options={dataColumn.opts} />
                                        </td>
                                    );
                            })}
                        </tr>
                    );
                })}
            </tbody>
        );
    }
}

export default Rows;
