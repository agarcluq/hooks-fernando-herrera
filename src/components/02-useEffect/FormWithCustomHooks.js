import React,{useState} from "react";


const FormWithCustomHooks = () => {
  const [formState,setFormState] = useState({
    name: '',
    email: ''
  })
  const {name,email} = formState;


const handleInputChange = ({target}) => {
  setFormState({
    ...formState,
    [target.name]: target.value
    
  })
}
  return (
    <>
      <h1>FormWithCustomHooks</h1>
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
export default FormWithCustomHooks;
