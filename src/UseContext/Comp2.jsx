import React from 'react'
import Comp3 from './Comp3'
import {UserContext} from './Comp1'
import { useContext } from 'react';

function Comp2({name}) {
    let user=useContext(UserContext);
  return (
    <div>
        <h2>this is comp {user}</h2>
        <Comp3/>
    </div>
  )
}

export default Comp2