import React from "react"
import Cartitems  from "./Cartitems"

class Cart extends React.Component {
    constructor(props) {
        super(props)
   
    }

    render() {
        let { products ,handleIncQty,handleDecQty ,handleDel} = this.props
        return (
            <div className="cart">
                {
                    products.map((product, index) => {
                       return <Cartitems key={index} product={product}
                       handleIncQty={handleIncQty}
                       handleDecQty={handleDecQty}
                       handleDel={handleDel}/>
                    })
                }
            </div>

        )
    }
}

export default Cart