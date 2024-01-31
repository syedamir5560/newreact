import React from 'react'
import Comp3 from './comp3'



function Comp2({ user }) {
    return (
        <div>
            <h1>this is compp 2 </h1>
            <Comp3 user={user} />
        </div>
    )
}

export default Comp2