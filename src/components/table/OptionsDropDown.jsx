import React from "react";
import { FormControl } from "react-bootstrap";

const OptionsDropDown = ({ handleRef, options, className }) => (
    <FormControl componentClass="select" className={className}>
        {options.map((data, indexColumn) => {
            return (
                <option key={`option_${indexColumn}`} value={data}>
                    {data}
                </option>
            )
        })}
    </FormControl>
);

export default OptionsDropDown;