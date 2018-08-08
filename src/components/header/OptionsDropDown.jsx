import React from "react";
import { FormControl } from "react-bootstrap";
import PropTypes from "prop-types";
import ColumnType from "../../helpers/ColumnType";

const OptionsDropDown = ({ handleRef, handleColumnType }) => (
    <FormControl componentClass="select" placeholder="Select a type" inputRef={el => handleRef(el)} onChange={handleColumnType}>
        <option value={ColumnType.number}>Number</option>
        <option value={ColumnType.date}>Date</option>
        <option value={ColumnType.text}>Text</option>
        <option value={ColumnType.select}>Multiple options</option>
    </FormControl>
);

OptionsDropDown.propTypes = {
    handleRef: PropTypes.func.isRequired,
    handleColumnType: PropTypes.func.isRequired
};

export default OptionsDropDown;
