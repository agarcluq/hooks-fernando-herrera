import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [counter,setCounter]= useState(0)

  const handleClick = () => {
  setCounter(counter+1)
  }
  return (
    <div>
      <h1>Contador {counter}</h1>
      <button onClick={handleClick}>Click+1</button>
    </div>  
  );
}
