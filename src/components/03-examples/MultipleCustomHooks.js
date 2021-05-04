import React,{useEffect,useState} from "react";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
const {loading} = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
console.log(loading)
  return (
    <>
      <h1>CreakingBad Quotes</h1>
  {
    loading 
    ? (<div>Loading ...</div>)
    :(
          <div>
            <p>Hola mundo</p>
            <small>- Fernando</small>
          </div>
    )
  }
     

    </>  
  )
}
export default MultipleCustomHooks;
