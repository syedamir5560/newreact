import React from 'react'
import { useState } from 'react'

function Controllable() {

    let[val , setVal] = useState("Fish")

    let handleChange =(event)=>{
        setVal(event.target.value)
    }

  return (

    
    <div>


        <input type='text' value={val} onChange={handleChange}/>
    </div>
  )
}

export default Controllable