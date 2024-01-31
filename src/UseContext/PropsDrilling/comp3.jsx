import React from 'react'
import Comp4 from './Comp4'

function comp3({ user }) {
    return (
        <div>
            <h1>This is Component 3</h1>
            <Comp4 user={user} />
        </div>
    )
}

export default comp3