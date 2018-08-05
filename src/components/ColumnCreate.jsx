import React from "react";
import { Modal, Button, FormGroup, FormControl, ControlLabel, Checkbox } from "react-bootstrap";
import ColumnType from "../helpers/ColumnType";
import api from "../api/spreadsheet";

let optionsArray = [...Array(10)];

const OptionsSelect = ({ handleRef }) => (
    <div>
        <ControlLabel>
            Enter below the options of the dropdown. In this version of our app you can only add 10 options. More option will come in hte premium version of the project{" "}
        </ControlLabel>
        {optionsArray.map((name, index) => {
            return <FormControl key={index} type="text" placeholder={`Enter option ${index}`} inputRef={el => handleRef(el, index)} />;
        })}
    </div>
);

const OptionsDropDown = ({ handleRef, handleColumnType }) => (
    <div>
        <ControlLabel>Column type</ControlLabel>
        <FormControl componentClass="select" placeholder="select" inputRef={el => handleRef(el)} onChange={handleColumnType}>
            <option value={ColumnType.number}>Number</option>
            <option value={ColumnType.date}>Date</option>
            <option value={ColumnType.text}>Text</option>
            <option value={ColumnType.select}>Multiple options</option>
        </FormControl>
    </div>
);

const Footer = ({ handleAdd, handleClose }) => (
    <div>
        <Button onClick={handleAdd}>Add column</Button>
        <Button onClick={handleClose}>Close</Button>
    </div>
);

class ColumnCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            showOptions: false
        };
        this._options = new Map();
    }

    handleShow = value => {
        this.setState({ show: value });
    };

    handleAdd = () => {
        let opts = Array.from(this._options.values())
            .filter(node => node !== null && node.value !== "")
            .map(node => node.value);
        opts.unshift("");
        api.addColumn({ name: this._name.value, type: this._type.value, required: this._required.checked, opts });
        this.setState({ show: false, showOptions: false });
    };
    handleColumnType = () => {
        this.setState({ showOptions: this._type.value === ColumnType.select });
    };

    render() {
        return (
            <div>
                <Button onClick={() => this.handleShow(true)}>Add column</Button>
                <Modal show={this.state.show} onHide={() => this.handleShow(false)}>
                    <Modal.Body>
                        <FormGroup>
                            <ControlLabel>Column name</ControlLabel>
                            <FormControl type="text" placeholder="Enter text" inputRef={el => (this._name = el)} />
                            <Checkbox inputRef={el => (this._required = el)}>Is required</Checkbox>
                            <OptionsDropDown handleColumnType={this.handleColumnType} handleRef={el => (this._type = el)} />
                            {this.state.showOptions ? <OptionsSelect handleRef={(el, index) => this._options.set(index, el)} /> : null}
                        </FormGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Footer handleAdd={this.handleAdd} handleClose={() => this.handleShow(false)} />
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ColumnCreate;
