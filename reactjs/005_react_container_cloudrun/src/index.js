//Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a React Component
const App = () => {
  return <div>HelloWorld!</div>;
};

//Take the React Component and show on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
