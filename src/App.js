import React, { useState } from 'react';

const Calculator = () => {
  const specialChar = ["%", "*", "/", "-", "+", "="];
  const [output, setOutput] = useState("");
  
  const calculate = (btnValue) => {
    let newOutput = output;

    if (btnValue === "=" && newOutput !== "") {
      newOutput = eval(newOutput.replace("%", "/100"));
    } else if (btnValue === "AC") {
      newOutput = "";
    } else if (btnValue === "DEL") {
      newOutput = newOutput.toString().slice(0, -1);
    } else {
      if (newOutput === "" && specialChar.includes(btnValue)) return;
      newOutput += btnValue;
    }

    setOutput(newOutput);
  }

  return (
    <div className="container">
      <input type="text" className="display" value={output} readOnly />

      <div className="buttons">
        <button className="operator" onClick={() => calculate("DEL")}>DEL</button>
        <button className="operator" onClick={() => calculate("AC")}>AC</button>
        <button className="operator" onClick={() => calculate("%")}>%</button>
        <button className="operator" onClick={() => calculate("/")}>/</button>
        
        <button onClick={() => calculate("7")}>7</button>
        <button onClick={() => calculate("8")}>8</button>
        <button onClick={() => calculate("9")}>9</button>
        <button className="operator" onClick={() => calculate("*")}>*</button>

        <button onClick={() => calculate("4")}>4</button>
        <button onClick={() => calculate("5")}>5</button>
        <button onClick={() => calculate("6")}>6</button>
        <button className="operator" onClick={() => calculate("-")}>-</button>

        <button onClick={() => calculate("1")}>1</button>
        <button onClick={() => calculate("2")}>2</button>
        <button onClick={() => calculate("3")}>3</button>
        <button className="operator" onClick={() => calculate("+")}>+</button>

        <button onClick={() => calculate("0")}>0</button>
        
        <button onClick={() => calculate(".")}>.</button>
        <button onClick={() => calculate(" ")}> </button>
        <button className="operator" onClick={() => calculate("=")}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
