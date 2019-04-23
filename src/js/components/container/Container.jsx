import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Recipe } from "../presentational/Recipe.jsx";

class Container extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <main>
            <h1>Family Recipes</h1>
            <Recipe
              title="Pancakes"
              recipe="flour, milk, eggs"
              time="~30min"
              image=""

            />
          </main>

        );
    }
}
export default Container;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<Container />, wrapper) : false;
