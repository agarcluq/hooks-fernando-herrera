import {useState} from 'react'

const useCounter = (initialState = 10) =>{
const [counter,setCounter] = useState(initialState)

const increment = () => {
  setState(state + 1)
}

const decrement = () => {
  setState(state - 1)
}
const reset = () => {
  setState(initialState)
}
return {
  counter,
  increment,
  decrement,
  reset
}
}
export default useCounter;