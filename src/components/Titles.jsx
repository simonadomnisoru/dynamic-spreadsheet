import React from "react";
import { FormControl } from "react-bootstrap";
import api from "../api/spreadsheet";

class Titles extends React.Component {
    constructor(props) {
        super(props);
        this._names = new Map();
    }
    handleChange = () => {
        let names = Array.from(this._names.values())
            .filter(node => node !== null && node.value !== "")
            .map((node, index) => ({ index, value: node.value }));
        //api.editColumn({ name: this._name.value });
    };
    render() {
        return (
            <thead>
                <tr>
                    {this.props.columns.map((data, index) => {
                        return (
                            <th key={`title_${index}`}>
                                {index !== 0 ? (
                                    <FormControl type="text" defaultValue={data.name} onChange={this.handleChange} inputRef={(el, index) => this._names.set(index, el)} />
                                ) : data.name}
                            </th>
                        );
                    })}
                </tr>
            </thead>
        );
    }
}

export default Titles;
