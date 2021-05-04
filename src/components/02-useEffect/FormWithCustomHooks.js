import React,{useState} from "react";


const FormWithCustomHooks = () => {
  const [formState,setFormState] = useState({
    name: '',
    email: '',
    password: ''
  })
  const {name,email,password} = formState;


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
            className="form-control"
            placeholder="Tu nombre"
            autoComplete="off"
            value={ name }
            onChange={ handleInputChange }
        />
        <input 
            type="text"
            name="email"
            className="form-control"
            placeholder="email@gmail.com"
            autoComplete="off"
            value={ email }
            onChange={ handleInputChange }
        />
        <input 
        type="password"
        name="password"
        className="form-control"
        placeholder="*****"
        value={ password }
        onChange={ handleInputChange }
        />
    </form>


    </>  
  )
}
export default FormWithCustomHooks;
