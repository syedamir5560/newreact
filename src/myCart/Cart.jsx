import React from "react"
import Cartitems  from "./Cartitems"

class Cart extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        let { products ,handleIncQty} = this.props
        return (
            <div className="cart">
                {
                    products.map((product, index) => {
                       return <Cartitems key={index} product={product}
                       handleIncQty={handleIncQty}/>
                    })
                }
            </div>

        )
    }
}

export default Cart