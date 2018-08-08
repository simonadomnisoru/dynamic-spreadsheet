import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";

const Rows = ({ rowsNumber, columns, handleError }) => {
    let rows = [...Array(rowsNumber)];
    return (
        <tbody>
            {rows.map((dataRow, indexRow) => {
                return (
                    <tr key={`row_${indexRow}`}>
                        {columns.map((dataColumn, indexColumn) => {
                            return (
                                <td key={`column_${indexColumn}`}>
                                    <Row
                                        indexRow={indexRow}
                                        dataColumn={dataColumn}
                                        indexColumn={indexColumn}
                                        handleError={handleError}
                                        handleBlur={e => this.handleBlur(e, dataColumn)}
                                    />
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
};

Rows.propTypes = {
    rowsNumber: PropTypes.number.isRequired,
    columns: PropTypes.array.isRequired,
    handleError: PropTypes.func
};

export default Rows;
