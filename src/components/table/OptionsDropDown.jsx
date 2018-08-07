import React from "react";
import { FormControl } from "react-bootstrap";

const OptionsDropDown = ({ handleBlur, options, className }) => (
    <FormControl componentClass="select" className={className} onBlur={(e) => handleBlur(e)}>
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