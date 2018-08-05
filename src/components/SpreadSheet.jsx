import React, { Component } from "react";
import { Table } from "react-bootstrap";
import store from "../state/store";
import Titles from "./Titles";
import Rows from "./Rows";
import "../style/index.css";

class SpreadSheet extends Component {
    componentDidMount() {
        store.subscribe(() =>
            this.setState({
                columnsNumber: store.getState().columnsNumber,
                rowsNumber: store.getState().rowsNumber,
                columns: store.getState().columns
            })
        );
    }
    render() {
        if (this.state && this.state.columnsNumber !== 1)
            return (
                <Table striped bordered condensed hover className="spreadsheet-table">
                    <Titles columns={this.state.columns} />
                    <Rows columns={this.state.columns} rowsNumber={this.state.rowsNumber} />
                </Table>
            );
        else return null;
    }
}

export default SpreadSheet;
