import React, { useState } from "react";


const PagesTwo = () => {

  const [getNameValue, setNameValue] = useState("");

  const changeValue = () => {
    setNameValue("Herdyansah");
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>NAMA SAYA ADALAH {getNameValue}</p>
        <button onClick={() => changeValue()}>CLICK ME!</button>
      </header>
    </div>
  );
}

export default PagesTwo;
