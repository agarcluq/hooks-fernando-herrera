import React,{useState} from "react";



export default function App() {
const [state,setState] =useState({
  counter1:10,
  counter2:20,
  counter3:30,
  counter4:20
});

const {counter1,counter2,counter4}=state;

  return (
    <>
      <p>Contador 1: {counter1}</p>
      <p>Contador 2: {counter2}</p>
      <p>Contador 4: {counter4}</p>
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
