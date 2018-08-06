import React from "react";
import { ButtonToolbar, Button } from "react-bootstrap";
import ColumnCreate from "./ColumnCreate";
import api from "../../api/spreadsheet";

const Header = () => (
    <ButtonToolbar>
        <ColumnCreate />
        <Button onClick={() => api.addRows()}>Add 10 rows</Button>
    </ButtonToolbar>
);
export default Header;