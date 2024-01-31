import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import Comp2 from './Comp2';


const UserContext = createContext();


function Comp1() {

    let [name , setName] = useState('amir')


  return (
    <UserContext.Provider value={name}>
        <h3>Comp 1</h3>
    <h1>{`Hello ${name}!`}</h1>
    <Comp2 />
  </UserContext.Provider>
  )
}

export default Comp1
export {UserContext};