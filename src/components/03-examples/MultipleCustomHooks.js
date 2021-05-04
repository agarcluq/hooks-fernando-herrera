import React,{useEffect,useState} from "react";
import useFetch from "../../hooks/useFetch";
import useCounter from "../../hooks/useCounter";

const MultipleCustomHooks = () => {
const {counter,increment} = useCounter(1)
const {loading,data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
const {author,quote} = !!data && data[0] //si existe la data sacame la posición 0 de la data
console.log(author,quote)

  return (
    <>
      <h1>CreakingBad Quotes</h1>
      {
        loading 
        ? (<div>Loading ...</div>)
        :(
              <div>
                <p>{quote}</p>
                <small>- {author}</small>
              </div>
        )
      }
      <button onClick={()=>setCounter(counter+1)}>Next</button>
     
    </>  
  )
}
export default MultipleCustomHooks;
