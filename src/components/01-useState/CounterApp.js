import React,{useState} from "react";



export default function App() {
const [state,setState] =useState({
  counter1:10,
  counter2:20
});

const {counter1,counter2}=state;

  return (
    <>
      <p>Contador 1: {counter1}</p>
      <p>Contador 2: {counter2}</p>
      <button onClick= {
        () => {
        setState({
          ...state,
          counter1:counter1+1,
        })
    }}> Click</button>
    </>  
  )
}
