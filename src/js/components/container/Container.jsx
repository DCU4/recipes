import React, { Component } from "react";
import ReactDOM from "react-dom";

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>hello</h1>
        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
