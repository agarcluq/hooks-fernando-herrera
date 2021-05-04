import React from "react";
import "./style.css";
// import CounterWithCustomHook from "./components/01-useState/CounterWithCustomHook";
import FormWithCustomHooks from "./components/02-useEffect/FormWithCustomHooks"
export default function App() {

  return (
    <div>
      {/* <CounterApp/> */}
      {/* <CounterWithCustomHook/> */}
      {/* <SimpleForm/> */}
      <FormWithCustomHooks/>
    </div>  
  );
}
