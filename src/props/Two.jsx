import React from 'react'
import Three from './Three'


function Two(props) {
    let about = props.nameData + " " + "is a Queen"
    return (

        <div style={{ border: '3px solid green', padding: '5%' }}>
            <h2>Two Says {props.nameData}</h2>
            <Three nameData={about} />
        </div>
    )
}

export default Two
