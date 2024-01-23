import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      products: [
        {
          id: 1,
          price: 10,
          title: "Refrigerator",
          qty: 1,
          img: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJpZGdlfGVufDB8fDB8fHww",
        },
        {
          id: 2,
          price: 20,
          title: "Kettle",
          qty: 2,
          img: "https://images.unsplash.com/photo-1594213114663-d94db9b17125?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V0dGxlfGVufDB8fDB8fHww",
        },
        {
          id: 3,
          price: 30,
          title: "Fluffy Blanket",
          qty: 3,
          img: "https://images.unsplash.com/photo-1433162653888-a571db5ccccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxhY25rZXR8ZW58MHx8MHx8fDA%3D",
        },
      ],
    }
    this.handleIncQty = this.handleIncQty.bind(this)
    this.handleDecQty = this.handleDecQty.bind(this)
    this.handleDel = this.handleDel.bind(this)
  }

  handleIncQty(para) {
    let index = this.state.products.indexOf(para)
    this.state.products[index].qty += 1
    this.setState({ products: this.state.products })
  }

  handleDecQty(para) {
    let index = this.state.products.indexOf(para)
    if (this.state.products[index].qty === 0) return null;
    this.state.products[index].qty -= 1
    this.setState({ products: this.state.products })
  }


  handleDel(paraId) {
    console.log(this.state.products)
    let { products } = this.state
    let newProduts = products.filter((ele) => {
      return ele.id !== paraId

    })
    this.setState({products:newProduts})
  }


  getCartCount(){
    let {products}=this.state
    let count = 0
    products.forEach((ele)=>{
      count +=ele.qty
    })
    return count
  }

  getCartTotal(){
    let total = 0;
    this.state.products.forEach((ele)=>{
      
       return total += ele.qty*ele.price
    })
    return total
  }

  render() {
    let { products } = this.state
    return (
      <div style={{ border: '2px solid red' }}>
        {/* <h1>Main</h1> */}
        <Navbar getCartCount={this.getCartCount()}/>
        <Cart products={products}
          handleIncQty={this.handleIncQty}
          handleDecQty={this.handleDecQty}
          handleDel={this.handleDel} />
          <h1>total={this.getCartTotal()}</h1>
      </div>
    )
  }
}

export default Main