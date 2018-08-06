import React from "react";
import Row from "./Row";

const Rows = ({ rowsNumber, columns, handleError }) => {
    let rows = [...Array(rowsNumber)];
    return (
        <tbody>
            {rows.map((dataRow, index) => {
                return (
                    <tr key={`row_${index}`}>
                        {columns.map((dataColumn, indexColumn) => {
                            return <td key={`column_${indexColumn}`}>
                                <Row index={index}
                                    dataColumn={dataColumn}
                                    indexColumn={indexColumn}
                                    handleError={handleError}
                                    handleBlur={e => this.handleBlur(e, dataColumn)} />
                            </td>
                        })}
                    </tr>
                );
            })}
        </tbody>
    );
}

export default Rows;
