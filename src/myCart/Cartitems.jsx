import React from "react";
import ci from './cartitem.module.css'

class Cartitems extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let { product, handleIncQty } = this.props;
        return (
            <>
                <div className={ci.cartitem}>
                    <div >
                        <img src={product.img} alt="" style={imgStyle.image} />
                    </div>
                    <div className="rightblock">
                        <p style={{ fontSize: 20 }}>{product.title}</p>
                        <p>Quatity = {product.qty}</p>
                        <p>Price = ${product.price}</p>
                        <div className={ci.cartitemactions}>
                            {/* icons */}
                            <img
                                src="https://cdn-icons-png.flaticon.com/128/4210/4210903.png" alt=""
                                className={ci.actionicons}
                                onClick={() => handleIncQty(product.title)}
                            />
                            <img className={ci.actionicons} src="https://cdn-icons-png.flaticon.com/128/11519/11519974.png" alt="" />
                            <img className={ci.actionicons} src="https://cdn-icons-png.flaticon.com/128/3221/3221897.png" alt="" />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}


const imgStyle = {
    image: {
        height: "120px",
        width: "120px",
        borderRadius: "10px",
        border: "3px solid blue",
    },
};

export default Cartitems

