import React from "react";
import { FormControl } from "react-bootstrap";
import api from "../../api/spreadsheet";

const Titles = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((data, index) => {
                    return (
                        <th key={`title_${index}`}>
                            {index !== 0 ? (
                                <FormControl type="text" defaultValue={data.name}
                                    onChange={el => api.editColumn({ name: el.target.value, index })} />
                            ) : data.name}
                        </th>
                    );
                })}
            </tr>
        </thead>
    );
}
export default Titles;