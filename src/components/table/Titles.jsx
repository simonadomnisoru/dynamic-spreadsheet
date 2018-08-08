import React from "react";
import PropTypes from "prop-types";
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

Titles.propTypes = {
    columns: PropTypes.array.isRequired
};

export default Titles;