import React, { Component } from "react";
import Header from "./Header";
import SpreadSheet from "./SpreadSheet";

class App extends Component {
    render() {
        return (
            <div>
                <Header/> <br/><SpreadSheet/>
            </div>
        );
    }
}

export default App;
