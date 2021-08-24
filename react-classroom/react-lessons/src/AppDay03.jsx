import './App.css';
import React, { useState, useEffect } from "react";

import "./App.css";
import TenLittleMonkeys from './components/day03-challenege/TenLittleMonkeys';
import InputField from './components/day03-challenege/inputFieldDemo/inputField';
import Calculator from './components/day03-challenege/calculator/Calulator';

function App() {
  // This is a comment
  const welcomeName = "Rodney!!!";

  return (
    <div className="App">
      <h1>Welecome to React, {welcomeName}</h1>
      {/* <InputField /> */}
      <Calculator />
      {/* <TenLittleMonkeys /> */}
    </div>
  );
}

export default App;
