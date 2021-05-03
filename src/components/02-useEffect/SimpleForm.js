import React,{useEffect,useState} from "react";
import Message from "./Message"

const SimpleForm = () => {
  const [formState,setFormState] = useState({
    name: '',
    email: ''
  })
  const {name,email} = formState;

useEffect ( () =>{
  console.log('hola')
},[])

useEffect ( () =>{
  console.log('email cambio')
},[email])



const handleInputChange = ({target}) => {
  setFormState({
    ...formState,
    [target.name]: target.value
    
  })
}
  return (
    <>
      <h1>Use effect</h1>
      <hr/>
      <form>
      <input
      type="text"
      name="name"
      placeholder="tu nombre"
      autoComplete="off"
      value={name}
      onChange = {handleInputChange}
      />
      <input
      type="text"
      name="email"
      placeholder="tu email"
      autoComplete="off"
      value={email}
      onChange = {handleInputChange}
      />
      </form>
      {email ===123 && <Message/>}

    </>  
  )
}
export default SimpleForm;
