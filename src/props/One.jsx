import React from 'react'
import Two from './Two'

function One() {
    let name = 'delaila'
  return (
    <div style={{border:'3px solid red',padding:'5%'}}>
        <h1>One 's name is {name}</h1>
        <Two nameData="sara"/>
    </div>

  )
}

export default One