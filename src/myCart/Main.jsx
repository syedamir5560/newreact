import React from "react";
 import Cart from "./Cart";

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            products: [
                {
                  id:1,
                  price: 10,
                  title: "Refrigerator",
                  qty: 1,
                  img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZGdlfGVufDB8fDB8fHww",
                },
                {
                  id:2,
                  price: 20,
                  title: "Kettle",
                  qty: 2,
                  img: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww",
                },
                {
                  id:3,
                  price: 30,
                  title: "Fluffy Blanket",
                  qty: 3,
                  img: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY25rZXR8ZW58MHx8MHx8fDA%3D",
                },
              ],
            }
        }
        
                handleIncQty (para){
            console.log(para)
        }
    
    render(){
        let {products} = this.state
        return (
           <div style={{border:'2px solid red'}}>
            <h1>Main</h1>
           <Cart products={products}
           handleIncQty={this.handleIncQty}/>
           </div>
        )
    }
}

export default Main