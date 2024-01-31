import React, { useState } from 'react'
import Comp2 from './Comp2'

function Comp1() {

    let [user, setUser] = useState('Aamir')

    return (
        <div>
            <h1>compp 1 {`hello ${user}`}</h1>
            <Comp2 user={user} />
        </div>
    )
}

export default Comp1