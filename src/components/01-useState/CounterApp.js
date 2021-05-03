import React,{useState} from "react";



export default function App() {
const [{counter1,counter2},setCounter] =useState({
  counter1:10,
  counter2:20
});

const incrementCounter = ()=> {
  setCounter({counter1:counter1+1,counter2:counter2})
   

}


  return (
    <>
      <p>Contador 1: {counter1}</p>
      <p>Contador 2: {counter2}</p>
      <button onClick={incrementCounter}>Click</button>
    </>  
  );
}
