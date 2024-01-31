import React from 'react'
import {UserContext} from './Comp1'
import { useContext } from 'react';


function Comp3({name}) {
    const user = useContext(UserContext);
  
    return (
      <>
        <h1>Component 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
      </>
    );
  }

  export default Comp3