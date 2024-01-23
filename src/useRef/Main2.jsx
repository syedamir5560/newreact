import React, { useRef } from 'react'

function Main2() {

let inpref = useRef()

let onHandleclick=()=>{
    let a = inpref

    a.current.style.border='2px solid blue'
}

  return (
    <div>
        <button onClick={onHandleclick}>click</button>
        <input type='text' name='' id="inp" ref={inpref}></input>
    </div>
  )
}

export default Main2