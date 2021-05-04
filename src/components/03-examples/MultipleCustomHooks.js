import React,{useEffect,useState} from "react";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
const state = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

  return (
    <>
      <h2>MultipleCustomHooks</h2>

    </>  
  )
}
export default MultipleCustomHooks;
