import React from "react";
import useCounter from "../../hooks/useCounter"

const CounterWithCustomHook = () => {
  const {state,increment,decrement} = useCounter();
  return (
    <>
      <h1>Contador con Hooks: {state}</h1>
      <hr/>
      <button onClick ={()=>increment(2)}> +1</button>
      <button onClick ={()=>decrement(2)}> -1</button>
    </>  
  )
}
export default CounterWithCustomHook;