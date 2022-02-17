// index.js is used for rendering components in index.html
// It imports components from respective JS file and renders it

import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
// import App from "./App.js";   // Import For Default Export
import {App} from "./App.js";    // Import For Named Export

/*
// component, JSX
// Using Normal Function
function App(){
    return(
        <h1> Hello World </h1>
    )
}
*/

/*
// component, JSX (Below code moved to App.js)
// Using Arrow Function (to make arrow function write function name = () => { })
const App=()=>{
    return(
        // Use <div> </div> while returning multiple tags
        <div>
        <h1 style={
                {color : "red", backgroundColor : "black",
                margin : "10px", padding : "10px", width : "170px"}
            }> Hello World </h1>

        <button className="button"> Apple </button>
        <button className="button"> Mango </button>
        <button className="button"> Banana </button>
        </div>
    )
}
*/

ReactDOM.render(<App/>, document.getElementById("root"));
// ReactDOM used for rendering (rendering reqd to show JSX in browser)
// For rendering the component, Use Component name in <Hello></Hello>
// OR
// Use Component name in self ending <Hello/>
// So it will print output
// Here we get element of id "root" from index.html file
// And rendered above JSX code in that Div (id= root)