// import React, { useEffect, useState } from 'react'

// function One() {


//     let [a , b] = useState (0);

//     console.log("outside")

//     useEffect(()=>{
//         console.log("inside");
//     },[])

// let change=()=>{
//     b(a+1)
// }
// let change2=()=>{
//     b(a-1)
// }

// let style={
//     red:{
//         backgroundColor:'red'
//     },

//     blue:{
//         backgroundColor:'blue'
//     }
// }

// let colors = (a >=5 ) ? style.red : style.blue;



//   return (
//     <div style={colors}>
//         <h1 >State  {a}</h1>
//         <button onClick={change}>inc</button>
//         <button onClick={change2}>dec</button>
//     </div>
//   )
// }

// export default One