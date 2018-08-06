import React from "react";
import { FormControl, ControlLabel } from "react-bootstrap";

const optionsArray = [...Array(10)];
const OptionsSelect = ({ handleRef, show }) => (
    show ? (<div>
        <ControlLabel>
            Enter below the options of the dropdown. For more then 10 options get the Premium version of our product.
        </ControlLabel>
        {optionsArray.map((name, index) => {
            return <FormControl key={index} type="text" placeholder={`Enter option ${index}`} inputRef={el => handleRef(el, index)} />;
        })}
    </div>) : null
);

export default OptionsSelect;