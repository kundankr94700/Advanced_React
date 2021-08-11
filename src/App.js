import React from "react";
import UseStateArray from "./Tutorial/UseStateArray";
import UseStateBasic from "./Tutorial/UseStateBasic";import UseStateCounter from "./Tutorial/UseStateCounter";
 import UseStateExample from "./Tutorial/useStateExample";
import UseStateObject from "./Tutorial/UseStateObject";
function App() {
  return (
    <div className="container">
      <header className="App-header">
      <h1>Advance React</h1>
        {/* <UseStateExample/> */}
        {/* <UseStateBasic/> */}
        {/* <UseStateArray/> */}
        {/* <UseStateObject/> */}
        <UseStateCounter/>
      </header>
    </div>
  );
}

export default App;
