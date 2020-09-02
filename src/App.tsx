import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Calc } from "./Calc";
import { CalcRust } from "./CalcRust";
//const wusty = await import("wusty"); //{ greet } from "wusty";

function App() {
  const [state, setState] = useState(0);

  import("wusty").then((wusty) => {
    //wusty.greet("Hans");
    const res = wusty.calc(1, 3);
    setState(res);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Result: {state}
        <Calc />
        <CalcRust />
      </header>
    </div>
  );
}

export default App;
