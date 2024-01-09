import React from 'react'
import Four from './Four'
function Three(props) {
    let data = props.nameData+' ' + 'greate worrier'
  return (
    <div style={{border:'3px solid blue',padding:'5%'}}>
        <h3>
            Three Says {props.nameData}
        </h3>
        <Four data={data}/>
    </div>
  )
}

export default Three