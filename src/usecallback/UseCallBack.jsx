import React, { useCallback, useState } from 'react'
import One from './One'


function UseCallBack() {

  let [count ,setCount] = useState(0)
  let [todos ,setTodos] = useState([])

  let countInc=()=>{
        setCount(count+1)
  }

  const addTodos = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);


  return (
    <div>
      <One todos={todos} addTodos={addTodos} />

      <h1>Count :{count}</h1>

      <button onClick={countInc}>inc</button>
    </div>
  )
}

export default UseCallBack