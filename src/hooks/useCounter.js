import {useState} from 'react'

const useCounter = (initialState) =>{
const [state,setState] = useState(initialState)

const increment = () => {
  setState(state + 1)
}

const decrement = () => {
  setState(state - 1)
}
return {
  state,
  increment,
  decrement
}
}
export default useCounter;