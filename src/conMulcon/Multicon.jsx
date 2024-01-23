import React, { useState } from 'react'

function Multicon() {

    let [a,b] = useState({
        username:'Henry',
        email:"dk@gmail.com"
    })

    let handleChange=(event)=>{
        b(
            {...a,[event.target.name]:event.target.value}
        )
    }

  return (
    <div>
        <input type='text' value={a.username} name='username' onChange={handleChange} />
        <input type='email' value={a.email} name='email' />
    </div>
  )
}

export default Multicon