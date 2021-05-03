import React,{useEffect,useState} from "react";


const Message = () => {
  useEffect(()=>{
  console.log('montado')
    return (()=>{
      console.log('desmontado')
    })
  },[])

  return  <p>eres genial</p>

}
export default Message;
