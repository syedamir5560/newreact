import React from 'react'
import Greet2 from './Greet2'


function Classcomp() {
  const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];
  
   
    const listItems = products.map(product =>
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
      >
        {product.title} 
      </li>
    );
  
    return (
      <>
      <Greet2 listItems={listItems} />
      {/* <h1>list</h1>
      <li>{listItems}</li> */}
      </>
    );
    }
    
  
  export default Classcomp