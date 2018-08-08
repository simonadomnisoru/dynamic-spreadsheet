import React, { Component } from "react";
import { Table, Alert } from "react-bootstrap";
import store from "../../state/store";
import Titles from "./Titles";
import Rows from "./Rows";
import "../../style/index.css";

class SpreadSheet extends Component {
    componentDidMount() {
        store.subscribe(() =>
            this.setState({
                rowsNumber: store.getState().rowsNumber,
                columns: store.getState().columns
            })
        );
    }

    handleError = error => {
        this.setState({ error: error });
    };
    render() {
        if (this.state && this.state.columns.length !== 1)
            return (
                <div>
                    {this.state.error ? (
                        <Alert bsStyle="danger">
                            <strong>{this.state.error}</strong>
                        </Alert>
                    ) : null}
                    <Table striped bordered condensed hover className="spreadsheet-table">
                        <Titles columns={this.state.columns} />
                        <Rows columns={this.state.columns} rowsNumber={this.state.rowsNumber} handleError={error => this.handleError(error)} />
                    </Table>
                </div>
            );
        else return null;
    }
}

export default SpreadSheet;
