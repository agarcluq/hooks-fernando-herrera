import React,{useEffect} from "react";
import useForm from "../../hooks/useForm"


const FormWithCustomHooks = () => {

  const [ formValues, handleInputChange ] =useForm({
      name: '',
      email: '',
      password: ''
  });

  const { name, email, password } = formValues;

useEffect(()=>{
  console.log('email cambio')
},[])

const handleSubmit = (e) => {
    e.preventDefault();

    console.log( formValues.email );
    
}

  return (
    <>
      <h1>FormWithCustomHooks</h1>
      <hr/>
      <form onSubmit={ handleSubmit }>
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

        <button type="submit">Click</button>
    </form>
      <p>Nombre: {formValues.name}</p>
      <p>Email: {formValues.email}</p>
      <p>Pwd: {formValues.password}</p>

    </>  
  )
}
export default FormWithCustomHooks;
