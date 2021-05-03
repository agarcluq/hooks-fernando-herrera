import React,{useEffect,useState} from "react";
import useCounter from "../../hooks/useCounter"

const SimpleForm = () => {
  const [formState,setFormState] = useState({
    name: '',
    email: ''
  })
  const {name,email} = formState;
useEffect ( () =>{
  console.log('hola')
},[])
const handleInputChange = ({target}) => {
  console.log(e.target.name)
  console.log(e.target.value)
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
      </form>

    </>  
  )
}
export default SimpleForm;
