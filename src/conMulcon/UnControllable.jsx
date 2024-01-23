import React, { useRef } from 'react'


function UnControllable() {

  let inpref  = useRef()
  console.log(inpref.current)
  return (
    <div>
      <input type='text' ref={inpref}/>
        <h1 >{inpref.current?.value}</h1>
        <button>Submit</button>
    </div>
  )
}

export default UnControllable